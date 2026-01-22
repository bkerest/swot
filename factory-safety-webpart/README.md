# ELVIAL SA - Ατομικά Μέτρα Προστασίας (ΑΜΠ) Web Part

## Περιγραφή

Αυτό το SharePoint Framework (SPFx) web part παρέχει μια πλήρη και διαδραστική σελίδα για τα Ατομικά Μέτρα Προστασίας (ΑΜΠ) στο εργοστάσιο διέλασης αλουμινίου της ELVIAL SA. Το web part περιλαμβάνει:

- **Υποχρεωτικά ΑΜΠ**: Λεπτομερείς πληροφορίες για όλα τα απαιτούμενα μέτρα προστασίας
- **ΑΜΠ ανά Ζώνη**: Ειδικές οδηγίες για κάθε περιοχή του εργοστασίου
- **Κανόνες Ασφαλείας**: Πλήρεις οδηγίες και χρονοδιαγράμματα συντήρησης
- **Διαδικασίες Έκτακτης Ανάγκης**: Οδηγίες για ατυχήματα και επαφές έκτακτης ανάγκης
- **Εκπαίδευση & Πόροι**: Εκπαιδευτικό υλικό και πιστοποιήσεις

## Απαιτήσεις Συστήματος

- **Node.js**: v16.13.0 ή νεότερη (αλλά όχι v19+)
- **SharePoint**: Online, 2019, ή 2016 (με Feature Pack)
- **Office 365**: Για ολοκληρωμένη λειτουργικότητα
- **Browsers**: Edge, Chrome, Firefox, Safari (τελευταίες εκδόσεις)

## Εγκατάσταση για Ανάπτυξη

### 1. Προετοιμασία Περιβάλλοντος

```bash
# Εγκατάσταση Node.js (αν δεν υπάρχει)
# Κατεβάστε από: https://nodejs.org/

# Εγκατάσταση Gulp και Yeoman globally
npm install -g gulp yo @microsoft/generator-sharepoint

# Clone το repository (ή αντιγράψτε τα αρχεία)
cd factory-safety-webpart
```

### 2. Εγκατάσταση Εξαρτήσεων

```bash
# Εγκατάσταση όλων των dependencies
npm install
```

### 3. Τοπικός Έλεγχος

```bash
# Εκκίνηση του τοπικού workbench
gulp serve

# Ή για SharePoint hosted workbench
gulp serve --nobrowser
```

Το web part θα είναι διαθέσιμο στο:
- Τοπικό workbench: `https://localhost:4321/temp/workbench.html`
- SharePoint workbench: `https://your-tenant.sharepoint.com/_layouts/workbench.aspx`

## Ανάπτυξη στο SharePoint

### Μέθοδος 1: Παραγωγή Package

```bash
# 1. Δημιουργία production build
gulp bundle --ship

# 2. Δημιουργία .sppkg αρχείου
gulp package-solution --ship
```

Το αρχείο `.sppkg` θα δημιουργηθεί στο: `sharepoint/solution/elvial-factory-safety-webpart.sppkg`

### Μέθοδος 2: Ανέβασμα στο SharePoint

1. **Μεταβείτε στο App Catalog**:
   - Πηγαίνετε στο SharePoint Admin Center
   - Επιλέξτε "More features" > "Apps" > "App Catalog"
   - Ή απευθείας: `https://your-tenant.sharepoint.com/sites/apps`

2. **Ανέβασμα του Package**:
   - Κάντε drag & drop το αρχείο `.sppkg` στο "Apps for SharePoint"
   - Επιλέξτε "Deploy" όταν εμφανιστεί το μήνυμα
   - ✅ Επιλέξτε "Make this solution available to all sites in the organization" για να το κάνετε διαθέσιμο παντού

3. **Προσθήκη στη Σελίδα**:
   - Πηγαίνετε στη σελίδα SharePoint όπου θέλετε το web part
   - Επεξεργαστείτε τη σελίδα
   - Κάντε κλικ στο "+" για προσθήκη web part
   - Αναζητήστε "Ατομικά Μέτρα Προστασίας - ELVIAL SA"
   - Προσθέστε το στη σελίδα

### Μέθοδος 3: Χρήση CDN (Προαιρετικά - Για Καλύτερη Απόδοση)

Αν θέλετε να φιλοξενήσετε τα αρχεία σε CDN:

1. **Ρύθμιση CDN Path**:
   ```bash
   # Επεξεργαστείτε το write-manifests.json
   # Αλλάξτε το cdnBasePath σε: "https://your-cdn-url/"
   ```

2. **Build και Deploy**:
   ```bash
   gulp bundle --ship
   gulp package-solution --ship
   ```

3. **Ανέβασμα αρχείων στο CDN**:
   - Αντιγράψτε τα αρχεία από `temp/deploy/` στο CDN σας
   - Ή χρησιμοποιήστε Office 365 CDN (ενεργοποίηση από Admin Center)

## Ρυθμίσεις Web Part

Μετά την προσθήκη του web part στη σελίδα, μπορείτε να το παραμετροποιήσετε:

### Διαθέσιμες Ρυθμίσεις

- **Περιγραφή**: Προσαρμόστε το μήνυμα περιγραφής
- **Όνομα Εταιρείας**: Αλλάξτε το όνομα (default: ELVIAL SA)
- **Εμφάνιση Επαφών Έκτακτης Ανάγκης**: Ενεργοποιήστε/απενεργοποιήστε τις επαφές

### Πώς να Επεξεργαστείτε Ρυθμίσεις

1. Κάντε κλικ στο εικονίδιο επεξεργασίας (μολύβι) του web part
2. Επιλέξτε το εικονίδιο ρυθμίσεων (γρανάζι)
3. Αλλάξτε τις επιθυμητές ρυθμίσεις
4. Κάντε "Save" και "Publish" τη σελίδα

## Προσαρμογή Περιεχομένου

### Αλλαγή Περιεχομένου ΑΜΠ

Για να προσαρμόσετε τις πληροφορίες ΑΜΠ:

1. Ανοίξτε το αρχείο: `src/webparts/factorySafety/components/FactorySafety.tsx`
2. Βρείτε τις ενότητες που θέλετε να επεξεργαστείτε:
   - Υποχρεωτικά ΑΜΠ: `renderPPECard()` calls
   - Ζώνες: `renderZone()` calls
   - Έκτακτες Ανάγκες: `renderEmergencyCard()` calls
3. Τροποποιήστε το κείμενο και τις πληροφορίες
4. Re-build και re-deploy

### Αλλαγή Styling

Για να αλλάξετε την εμφάνιση:

1. Ανοίξτε το αρχείο: `src/webparts/factorySafety/components/FactorySafety.module.scss`
2. Τροποποιήστε τα χρώματα, fonts, layouts
3. Re-build το project

### Προσθήκη Νέων Tabs

Για να προσθέσετε νέα tabs:

1. Στο `FactorySafety.tsx`, προσθέστε ένα νέο `<PivotItem>`
2. Δημιουργήστε το περιεχόμενο μέσα στο tab
3. Re-build και re-deploy

## Αντιμετώπιση Προβλημάτων

### Πρόβλημα: "gulp: command not found"

```bash
npm install -g gulp
```

### Πρόβλημα: "Node version incompatible"

```bash
# Χρησιμοποιήστε nvm για εναλλαγή έκδοσης
nvm install 16
nvm use 16
```

### Πρόβλημα: "Cannot find module @microsoft/sp-build-web"

```bash
# Καθαρισμός και επανεγκατάσταση
rm -rf node_modules package-lock.json
npm install
```

### Πρόβλημα: "Certificate error" κατά το gulp serve

```bash
# Εγκατάσταση του development certificate
gulp trust-dev-cert
```

### Πρόβλημα: Web part δεν εμφανίζεται στο SharePoint

1. Ελέγξτε ότι το app είναι deployed στο App Catalog
2. Βεβαιωθείτε ότι έχετε κάνει "Deploy" το solution
3. Ελέγξτε τα permissions στο site collection
4. Δοκιμάστε hard refresh (Ctrl+Shift+R)

## Συντήρηση και Ενημερώσεις

### Ενημέρωση Περιεχομένου

Όταν χρειάζεται να ενημερώσετε το περιεχόμενο:

1. Επεξεργαστείτε τα αρχεία `.tsx`
2. Αυξήστε το version στο `package.json` και `package-solution.json`
3. Build και package ξανά
4. Ανεβάστε το νέο `.sppkg` (θα αντικαταστήσει το παλιό)

### Backup

Κάντε backup τακτικά:
- Όλο το φάκελο `factory-safety-webpart/`
- Το `.sppkg` αρχείο από το App Catalog
- Τις ρυθμίσεις του web part (screenshots)

## Υποστήριξη και Επικοινωνία

Για τεχνική υποστήριξη:
- **Email**: it-support@elvial.gr (παράδειγμα)
- **Τηλέφωνο**: εσωτ. 250 (Τμήμα Ασφαλείας)
- **Τηλέφωνο**: εσωτ. 400 (IT Support)

## Άδεια Χρήσης

Αυτό το web part είναι αποκλειστική ιδιοκτησία της ELVIAL SA και προορίζεται για εσωτερική χρήση μόνο.

## Πιστοποιήσεις

- ✅ Συμβατό με SharePoint Online
- ✅ Συμβατό με Microsoft Teams
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Multi-language support (Ελληνικά, English)

---

**Τελευταία Ενημέρωση**: Ιανουάριος 2026
**Έκδοση**: 1.0.0
**Συγγραφέας**: ELVIAL SA IT Department
