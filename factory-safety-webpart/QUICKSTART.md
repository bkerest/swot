# Γρήγορη Έναρξη - ELVIAL Factory Safety Web Part

## Γρήγορα Βήματα για Ανάπτυξη

### Βήμα 1: Προαπαιτούμενα (5 λεπτά)

```bash
# Έλεγχος αν έχετε Node.js
node --version
# Πρέπει να δείχνει: v16.x.x ή v18.x.x

# Αν δεν έχετε, κατεβάστε από:
# https://nodejs.org/ (LTS version)

# Εγκατάσταση global tools
npm install -g gulp yo @microsoft/generator-sharepoint
```

### Βήμα 2: Εγκατάσταση Dependencies (3 λεπτά)

```bash
# Μεταβείτε στο φάκελο του project
cd factory-safety-webpart

# Εγκατάσταση
npm install
```

### Βήμα 3: Δοκιμή Τοπικά (2 λεπτά)

```bash
# Εκκίνηση local workbench
gulp serve
```

Ανοίξτε το browser στο: `https://localhost:4321/temp/workbench.html`

### Βήμα 4: Build για Production (2 λεπτά)

```bash
# Δημιουργία του SharePoint package
gulp bundle --ship
gulp package-solution --ship
```

Το αρχείο βρίσκεται στο: `sharepoint/solution/elvial-factory-safety-webpart.sppkg`

### Βήμα 5: Ανέβασμα στο SharePoint (3 λεπτά)

1. Πηγαίνετε στο SharePoint App Catalog:
   ```
   https://[your-tenant].sharepoint.com/sites/apps
   ```

2. Κάντε drag & drop το αρχείο `.sppkg`

3. Κάντε κλικ **"Deploy"**

4. ✅ Επιλέξτε **"Make available to all sites"**

### Βήμα 6: Προσθήκη στη Σελίδα (2 λεπτά)

1. Πηγαίνετε στη σελίδα SharePoint

2. Κάντε κλικ **"Edit"**

3. Κάντε κλικ στο **"+"** button

4. Αναζητήστε: **"Ατομικά Μέτρα Προστασίας"**

5. Προσθέστε το web part

6. Κάντε κλικ **"Publish"**

## ✅ Ολοκληρώθηκε!

Το web part είναι τώρα live στο SharePoint σας!

---

## Συχνές Ερωτήσεις

### Πώς μπορώ να αλλάξω το όνομα της εταιρείας;

1. Επεξεργαστείτε τη σελίδα
2. Κάντε κλικ στο εικονίδιο ρυθμίσεων (⚙️) του web part
3. Αλλάξτε το πεδίο "Όνομα Εταιρείας"
4. Save & Publish

### Πώς μπορώ να ενημερώσω το περιεχόμενο;

Επεξεργαστείτε το αρχείο:
```
src/webparts/factorySafety/components/FactorySafety.tsx
```

Στη συνέχεια:
```bash
gulp bundle --ship
gulp package-solution --ship
```

Ανεβάστε ξανά το νέο `.sppkg` αρχείο.

### Δεν εμφανίζεται το web part. Τι κάνω;

```bash
# 1. Ελέγξτε το App Catalog - πρέπει να λέει "Deployed"
# 2. Hard refresh τη σελίδα: Ctrl+Shift+R
# 3. Ελέγξτε browser console για errors (F12)
# 4. Δοκιμάστε σε incognito mode
```

### Πώς μπορώ να κρύψω τις επαφές έκτακτης ανάγκης;

1. Web part settings (⚙️)
2. Απενεργοποιήστε: "Εμφάνιση Επαφών Έκτακτης Ανάγκης"

---

## Χρήσιμα Commands

```bash
# Έναρξη development server
gulp serve

# Clean build artifacts
gulp clean

# Build για παραγωγή
gulp bundle --ship && gulp package-solution --ship

# Έλεγχος για linting errors
gulp lint

# Run tests (αν υπάρχουν)
npm test
```

---

## Χρειάζεστε Βοήθεια;

📧 Email: it-support@elvial.gr
📞 Τηλέφωνο: εσωτ. 400
📚 Πλήρης Τεκμηρίωση: README.md

---

**Καλή Επιτυχία!** 🎉
