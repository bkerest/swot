import * as React from 'react';
import styles from './FactorySafety.module.scss';
import { IFactorySafetyProps } from './IFactorySafetyProps';
import {
  Icon,
  MessageBar,
  MessageBarType,
  Pivot,
  PivotItem,
  Stack,
  Text,
  DefaultButton,
  PrimaryButton
} from '@fluentui/react';

export default class FactorySafety extends React.Component<IFactorySafetyProps, {}> {

  public render(): React.ReactElement<IFactorySafetyProps> {
    const {
      companyName,
      showEmergencyContacts,
      userDisplayName,
      hasTeamsContext
    } = this.props;

    return (
      <div className={styles.factorySafety}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <Icon iconName="Shield" className={styles.headerIcon} />
            <div className={styles.headerContent}>
              <h1 className={styles.title}>Ατομικά Μέτρα Προστασίας (ΑΜΠ)</h1>
              <h2 className={styles.subtitle}>{companyName} - Εργοστάσιο Διέλασης Αλουμινίου</h2>
            </div>
          </div>

          {/* Welcome Message */}
          <MessageBar messageBarType={MessageBarType.info} className={styles.welcomeMessage}>
            <strong>Καλωσήρθατε, {userDisplayName}!</strong> Η ασφάλειά σας είναι η προτεραιότητά μας.
            Παρακαλούμε διαβάστε προσεκτικά τις παρακάτω οδηγίες.
          </MessageBar>

          {/* Main Content Tabs */}
          <Pivot className={styles.pivot}>
            {/* Tab 1: Mandatory PPE */}
            <PivotItem headerText="Υποχρεωτικά ΑΜΠ" itemIcon="CheckboxComposite">
              <div className={styles.content}>
                <MessageBar messageBarType={MessageBarType.severeWarning}>
                  Τα παρακάτω μέτρα προστασίας είναι ΥΠΟΧΡΕΩΤΙΚΑ για την είσοδο και παραμονή στο εργοστάσιο
                </MessageBar>

                <div className={styles.ppeGrid}>
                  {this.renderPPECard(
                    'HardHat',
                    'Κράνος Ασφαλείας',
                    'Υποχρεωτικό σε όλους τους χώρους παραγωγής',
                    [
                      'Προστασία από πτώση αντικειμένων',
                      'Πιστοποίηση EN 397',
                      'Έλεγχος κατάστασης κάθε 6 μήνες',
                      'Αντικατάσταση μετά από κρούση'
                    ]
                  )}

                  {this.renderPPECard(
                    'Glasses',
                    'Προστατευτικά Γυαλιά',
                    'Υποχρεωτικά σε περιοχές κοπής και επεξεργασίας',
                    [
                      'Προστασία από θραύσματα αλουμινίου',
                      'Αντοχή σε χημικά λιπαντικά',
                      'Πιστοποίηση EN 166',
                      'Αντι-θάμβωση και αντι-γρατζούνισμα'
                    ]
                  )}

                  {this.renderPPECard(
                    'Shoes',
                    'Υποδήματα Ασφαλείας',
                    'Υποχρεωτικά σε όλο το εργοστάσιο',
                    [
                      'Ατσάλινος προστατευτικός δάκτυλος (200 joules)',
                      'Αντιολισθητική σόλα',
                      'Πιστοποίηση EN ISO 20345:2011 S3',
                      'Αντοχή σε έλαια και υδρογονάνθρακες'
                    ]
                  )}

                  {this.renderPPECard(
                    'Processing',
                    'Γάντια Εργασίας',
                    'Ανάλογα με τον τύπο εργασίας',
                    [
                      'Μηχανικής προστασίας (EN 388) για χειρισμό προφίλ',
                      'Θερμικής προστασίας (EN 407) για θερμές επιφάνειες',
                      'Χημικής προστασίας (EN 374) για λιπαντικά',
                      'Αντικατάσταση όταν φθαρούν'
                    ]
                  )}

                  {this.renderPPECard(
                    'ProtectionCenterLogo',
                    'Ρουχισμός Εργασίας',
                    'Υποχρεωτικός σε χώρους παραγωγής',
                    [
                      'Φόρμα εργασίας από ανθεκτικό ύφασμα',
                      'Αντανακλαστικές ταινίες για ορατότητα',
                      'Χωρίς χαλαρά μέρη (κίνδυνος εμπλοκής)',
                      'Καθαρισμός τουλάχιστον 1 φορά/εβδομάδα'
                    ]
                  )}

                  {this.renderPPECard(
                    'Microphone',
                    'Ωτοασπίδες',
                    'Υποχρεωτικές σε θορυβώδεις περιοχές (>85dB)',
                    [
                      'Μείωση θορύβου τουλάχιστον 25 dB',
                      'Πιστοποίηση EN 352',
                      'Διαθέσιμες ωτοασπίδες και ωτοβύσματα',
                      'Καθαρισμός μετά από κάθε χρήση'
                    ]
                  )}
                </div>
              </div>
            </PivotItem>

            {/* Tab 2: Zone-Specific PPE */}
            <PivotItem headerText="ΑΜΠ ανά Ζώνη" itemIcon="MapPin">
              <div className={styles.content}>
                {this.renderZone(
                  'Ζώνη Διέλασης (Πρέσες)',
                  'Warning',
                  '#d83b01',
                  [
                    'Κράνος ασφαλείας',
                    'Προστατευτικά γυαλιά',
                    'Γάντια θερμικής προστασίας (έως 100°C)',
                    'Υποδήματα ασφαλείας S3',
                    'Ωτοασπίδες (θόρυβος >90dB)',
                    'Φόρμα εργασίας με αντανακλαστικά',
                    'Αναπνευστική μάσκα FFP2 (αναθυμιάσεις λιπαντικών)'
                  ],
                  [
                    'Υψηλές θερμοκρασίες (έως 500°C)',
                    'Κίνδυνος εγκαυμάτων',
                    'Έντονος θόρυβος',
                    'Λιπαντικά υπό πίεση'
                  ]
                )}

                {this.renderZone(
                  'Ζώνη Κοπής & Επεξεργασίας',
                  'Cut',
                  '#8764b8',
                  [
                    'Κράνος ασφαλείας',
                    'Προστατευτικά γυαλιά (υποχρεωτικά)',
                    'Γάντια μηχανικής προστασίας (Level 3-4)',
                    'Υποδήματα ασφαλείας S3',
                    'Ωτοασπίδες',
                    'Φόρμα εργασίας',
                    'Προστατευτική μάσκα κατά της σκόνης'
                  ],
                  [
                    'Ιπτάμενα θραύσματα αλουμινίου',
                    'Κοφτερές ακμές',
                    'Περιστρεφόμενα μηχανήματα',
                    'Σκόνη αλουμινίου'
                  ]
                )}

                {this.renderZone(
                  'Ζώνη Βαφής & Επικάλυψης',
                  'BucketColor',
                  '#00bcf2',
                  [
                    'Κράνος ασφαλείας',
                    'Προστατευτικά γυαλιά ή ολοπρόσωπη μάσκα',
                    'Γάντια χημικής προστασίας (νιτρίλιο)',
                    'Υποδήματα ασφαλείας S3',
                    'Αναπνευστική προστασία FFP3 ή μάσκα με φίλτρα',
                    'Στολή χημικής προστασίας (Tyvek)',
                    'Προστατευτική ποδιά'
                  ],
                  [
                    'Χημικά (οξέα, αλκάλια)',
                    'Τοξικές αναθυμιάσεις',
                    'Κίνδυνος διάβρωσης δέρματος',
                    'Ολισθηρό δάπεδο'
                  ]
                )}

                {this.renderZone(
                  'Αποθήκη & Φορτοεκφόρτωση',
                  'Package',
                  '#107c10',
                  [
                    'Κράνος ασφαλείας',
                    'Προστατευτικά γυαλιά (προαιρετικά)',
                    'Γάντια μηχανικής προστασίας',
                    'Υποδήματα ασφαλείας S3',
                    'Φόρμα εργασίας με αντανακλαστικά (υποχρεωτικά)',
                    'Ζώνη μέσης (για ανυψώσεις >15kg)'
                  ],
                  [
                    'Κίνηση οχημάτων (κλαρκ)',
                    'Πτώση φορτίων',
                    'Χειρισμός βαρέων αντικειμένων',
                    'Περιορισμένη ορατότητα'
                  ]
                )}

                {this.renderZone(
                  'Εργαστήριο Ποιότητας',
                  'TestBeaker',
                  '#e3008c',
                  [
                    'Ρούχα εργαστηρίου (λευκή μπλούζα)',
                    'Προστατευτικά γυαλιά',
                    'Γάντια νιτριλίου (για χημικές αναλύσεις)',
                    'Κλειστά υποδήματα',
                    'Μάσκα (προαιρετικά για ορισμένες δοκιμές)'
                  ],
                  [
                    'Χημικά αντιδραστήρια',
                    'Εργαστηριακός εξοπλισμός',
                    'Οξέα και βάσεις',
                    'Θραυστά σκεύη'
                  ]
                )}
              </div>
            </PivotItem>

            {/* Tab 3: Safety Rules */}
            <PivotItem headerText="Κανόνες Ασφαλείας" itemIcon="Shield">
              <div className={styles.content}>
                <h3 className={styles.sectionTitle}>Γενικοί Κανόνες</h3>

                <div className={styles.rulesSection}>
                  <MessageBar messageBarType={MessageBarType.error}>
                    <strong>ΑΠΑΓΟΡΕΥΕΤΑΙ ΑΥΣΤΗΡΑ:</strong>
                  </MessageBar>
                  <ul className={styles.rulesList}>
                    <li>Η είσοδος χωρίς τα απαραίτητα ΑΜΠ</li>
                    <li>Η χρήση κατεστραμμένων ή μη πιστοποιημένων ΑΜΠ</li>
                    <li>Η αφαίρεση ΑΜΠ κατά τη διάρκεια της εργασίας</li>
                    <li>Η χρήση κοσμημάτων, ρολογιών, δαχτυλιδιών κοντά σε μηχανήματα</li>
                    <li>Τα μακριά μαλλιά χωρίς σκούφο/δίχτυ</li>
                    <li>Τα φαρδιά ρούχα που μπορούν να εμπλακούν σε μηχανήματα</li>
                    <li>Το τρέξιμο στους χώρους εργασίας</li>
                  </ul>
                </div>

                <div className={styles.rulesSection}>
                  <MessageBar messageBarType={MessageBarType.success}>
                    <strong>ΥΠΟΧΡΕΩΣΕΙΣ ΕΡΓΑΖΟΜΕΝΩΝ:</strong>
                  </MessageBar>
                  <ul className={styles.rulesList}>
                    <li>Να φοράτε ΠΑΝΤΑ τα κατάλληλα ΑΜΠ για τη ζώνη εργασίας σας</li>
                    <li>Να ελέγχετε την κατάσταση των ΑΜΠ πριν τη χρήση</li>
                    <li>Να αναφέρετε άμεσα φθαρμένα ή ελαττωματικά ΑΜΠ</li>
                    <li>Να συμμετέχετε στις εκπαιδεύσεις ασφαλείας</li>
                    <li>Να ακολουθείτε τις οδηγίες ασφαλείας των επιβλεπόντων</li>
                    <li>Να διατηρείτε τα ΑΜΠ καθαρά και σε καλή κατάσταση</li>
                    <li>Να αποθηκεύετε σωστά τα ΑΜΠ μετά τη χρήση</li>
                  </ul>
                </div>

                <div className={styles.rulesSection}>
                  <h4 className={styles.subsectionTitle}>
                    <Icon iconName="DateTime" className={styles.subsectionIcon} />
                    Χρονοδιάγραμμα Συντήρησης ΑΜΠ
                  </h4>
                  <table className={styles.maintenanceTable}>
                    <thead>
                      <tr>
                        <th>ΑΜΠ</th>
                        <th>Έλεγχος</th>
                        <th>Αντικατάσταση</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Κράνος</td>
                        <td>Κάθε 6 μήνες</td>
                        <td>Κάθε 5 έτη ή μετά από κρούση</td>
                      </tr>
                      <tr>
                        <td>Γυαλιά</td>
                        <td>Καθημερινά (οπτική καθαρότητα)</td>
                        <td>Όταν γρατζουνιστούν ή σπάσουν</td>
                      </tr>
                      <tr>
                        <td>Υποδήματα</td>
                        <td>Εβδομαδιαία (σόλα, κορδόνια)</td>
                        <td>Κάθε 12-18 μήνες ή όταν φθαρούν</td>
                      </tr>
                      <tr>
                        <td>Γάντια</td>
                        <td>Πριν από κάθε χρήση</td>
                        <td>Όταν σχιστούν ή φθαρούν</td>
                      </tr>
                      <tr>
                        <td>Ωτοασπίδες</td>
                        <td>Μηνιαία (υγιεινή, λειτουργία)</td>
                        <td>Κάθε 2-3 έτη</td>
                      </tr>
                      <tr>
                        <td>Αναπνευστικές μάσκες</td>
                        <td>Πριν από κάθε χρήση</td>
                        <td>Φίλτρα: κάθε 1-3 μήνες</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={styles.rulesSection}>
                  <h4 className={styles.subsectionTitle}>
                    <Icon iconName="Education" className={styles.subsectionIcon} />
                    Εκπαίδευση & Πιστοποίηση
                  </h4>
                  <ul className={styles.rulesList}>
                    <li><strong>Νέοι εργαζόμενοι:</strong> Υποχρεωτική εκπαίδευση 8 ωρών πριν την έναρξη εργασίας</li>
                    <li><strong>Ετήσια ανανέωση:</strong> 2 ώρες εκπαίδευση ασφαλείας κάθε χρόνο</li>
                    <li><strong>Ειδικές εργασίες:</strong> Πιστοποίηση για λειτουργία μηχανημάτων (κλαρκ, γερανοί)</li>
                    <li><strong>Πρώτες Βοήθειες:</strong> Τουλάχιστον 2 άτομα ανά βάρδια με πιστοποίηση</li>
                  </ul>
                </div>
              </div>
            </PivotItem>

            {/* Tab 4: Emergency Procedures */}
            <PivotItem headerText="Διαδικασίες Έκτακτης Ανάγκης" itemIcon="Medical">
              <div className={styles.content}>
                <h3 className={styles.sectionTitle}>Σε Περίπτωση Ατυχήματος</h3>

                <div className={styles.emergencyGrid}>
                  {this.renderEmergencyCard(
                    'Health',
                    'Τραυματισμός',
                    [
                      '1. ΣΤΑΜΑΤΗΣΤΕ την εργασία αμέσως',
                      '2. Εφαρμόστε πρώτες βοήθειες (αν είστε πιστοποιημένοι)',
                      '3. Ειδοποιήστε ΑΜΕΣΑ τον επιβλέποντα',
                      '4. Καλέστε το 166 για σοβαρούς τραυματισμούς',
                      '5. ΜΗΝ μετακινήσετε σοβαρά τραυματία',
                      '6. Συμπληρώστε αναφορά ατυχήματος'
                    ],
                    '#d13438'
                  )}

                  {this.renderEmergencyCard(
                    'Flame',
                    'Πυρκαγιά',
                    [
                      '1. Ενεργοποιήστε τον πλησιέστερο συναγερμό',
                      '2. Καλέστε την Πυροσβεστική (199)',
                      '3. Προσπαθήστε να σβήσετε μικρές φωτιές (αν είναι ασφαλές)',
                      '4. Εκκενώστε την περιοχή οργανωμένα',
                      '5. Κλείστε πόρτες/παράθυρα (μην κλειδώνετε)',
                      '6. Συγκεντρωθείτε στο σημείο συνάντησης'
                    ],
                    '#ff8c00'
                  )}

                  {this.renderEmergencyCard(
                    'DelveAnalytics',
                    'Διαρροή Χημικών',
                    [
                      '1. Εκκενώστε την περιοχή αμέσως',
                      '2. Ειδοποιήστε τον υπεύθυνο ασφαλείας',
                      '3. ΜΗΝ αγγίζετε τα χημικά',
                      '4. Χρησιμοποιήστε κατάλληλα ΑΜΠ χημικής προστασίας',
                      '5. Αερίστε τον χώρο (αν είναι ασφαλές)',
                      '6. Ακολουθήστε το SDS του χημικού'
                    ],
                    '#8764b8'
                  )}

                  {this.renderEmergencyCard(
                    'Lightbulb',
                    'Ηλεκτροπληξία',
                    [
                      '1. ΜΗΝ αγγίξετε το θύμα',
                      '2. Διακόψτε την παροχή ρεύματος (διακόπτης)',
                      '3. Καλέστε 166 ΑΜΕΣΑ',
                      '4. Μετακινήστε το θύμα με μονωτικό υλικό',
                      '5. Εφαρμόστε CPR (αν είστε εκπαιδευμένοι)',
                      '6. Μη δίνετε νερό ή τροφή'
                    ],
                    '#ffb900'
                  )}
                </div>

                {showEmergencyContacts && (
                  <div className={styles.contactsSection}>
                    <h3 className={styles.sectionTitle}>
                      <Icon iconName="Phone" /> Τηλέφωνα Έκτακτης Ανάγκης
                    </h3>
                    <div className={styles.contactsGrid}>
                      <div className={styles.contactCard}>
                        <Icon iconName="Hospital" className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <strong>ΕΚΑΒ</strong>
                          <span className={styles.contactNumber}>166</span>
                        </div>
                      </div>
                      <div className={styles.contactCard}>
                        <Icon iconName="Flame" className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <strong>Πυροσβεστική</strong>
                          <span className={styles.contactNumber}>199</span>
                        </div>
                      </div>
                      <div className={styles.contactCard}>
                        <Icon iconName="Lifesaver" className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <strong>Υπεύθυνος Ασφαλείας</strong>
                          <span className={styles.contactNumber}>εσωτ. 250</span>
                        </div>
                      </div>
                      <div className={styles.contactCard}>
                        <Icon iconName="Medical" className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <strong>Ιατρείο Εργοστασίου</strong>
                          <span className={styles.contactNumber}>εσωτ. 100</span>
                        </div>
                      </div>
                      <div className={styles.contactCard}>
                        <Icon iconName="SecurityGroup" className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <strong>Φύλακας/Πυλωρός</strong>
                          <span className={styles.contactNumber}>εσωτ. 001</span>
                        </div>
                      </div>
                      <div className={styles.contactCard}>
                        <Icon iconName="Engineering" className={styles.contactIcon} />
                        <div className={styles.contactInfo}>
                          <strong>Συντήρηση</strong>
                          <span className={styles.contactNumber}>εσωτ. 300</span>
                        </div>
                      </div>
                    </div>

                    <MessageBar messageBarType={MessageBarType.warning} className={styles.emergencyNote}>
                      <strong>Σημεία Συνάντησης:</strong> Κεντρικός χώρος στάθμευσης (Σημείο Α)
                      και Δυτική είσοδος (Σημείο Β). Δείτε το σχεδιάγραμμα εκκένωσης στους διαδρόμους.
                    </MessageBar>
                  </div>
                )}

                <div className={styles.firstAidSection}>
                  <h3 className={styles.sectionTitle}>
                    <Icon iconName="Health" /> Θέσεις Πρώτων Βοηθειών
                  </h3>
                  <ul className={styles.rulesList}>
                    <li><strong>Φαρμακείο Εργοστασίου:</strong> Ισόγειο, κοντά στα γραφεία διοίκησης</li>
                    <li><strong>Φορητά κιτ πρώτων βοηθειών:</strong> Σε κάθε τμήμα παραγωγής (πράσινες ντουλάπες)</li>
                    <li><strong>AED (απινιδωτής):</strong> Κεντρική είσοδος και χώρος τραπεζαρίας</li>
                    <li><strong>Πλυστήρες ματιών:</strong> Ζώνη βαφής και εργαστήριο ποιότητας</li>
                    <li><strong>Ντους ασφαλείας:</strong> Ζώνη βαφής (για χημικά)</li>
                  </ul>
                </div>
              </div>
            </PivotItem>

            {/* Tab 5: Training & Resources */}
            <PivotItem headerText="Εκπαίδευση & Πόροι" itemIcon="Education">
              <div className={styles.content}>
                <h3 className={styles.sectionTitle}>Εκπαιδευτικό Υλικό</h3>

                <Stack tokens={{ childrenGap: 15 }}>
                  <div className={styles.resourceCard}>
                    <Icon iconName="VideoSolid" className={styles.resourceIcon} />
                    <div className={styles.resourceContent}>
                      <h4>Βίντεο Εκπαίδευσης</h4>
                      <p>Παρακολουθήστε τα εκπαιδευτικά βίντεο για τη σωστή χρήση των ΑΜΠ</p>
                      <DefaultButton text="Δείτε βίντεο" iconProps={{ iconName: 'Play' }} />
                    </div>
                  </div>

                  <div className={styles.resourceCard}>
                    <Icon iconName="PDF" className={styles.resourceIcon} />
                    <div className={styles.resourceContent}>
                      <h4>Εγχειρίδια & Οδηγοί</h4>
                      <p>Κατεβάστε τα εγχειρίδια ασφαλείας σε μορφή PDF</p>
                      <DefaultButton text="Λήψη αρχείων" iconProps={{ iconName: 'Download' }} />
                    </div>
                  </div>

                  <div className={styles.resourceCard}>
                    <Icon iconName="TestPlan" className={styles.resourceIcon} />
                    <div className={styles.resourceContent}>
                      <h4>Quiz Αξιολόγησης</h4>
                      <p>Ελέγξτε τις γνώσεις σας με το διαδραστικό quiz ασφαλείας</p>
                      <PrimaryButton text="Έναρξη Quiz" iconProps={{ iconName: 'TestAutoSolid' }} />
                    </div>
                  </div>

                  <div className={styles.resourceCard}>
                    <Icon iconName="Calendar" className={styles.resourceIcon} />
                    <div className={styles.resourceContent}>
                      <h4>Προγραμματισμός Εκπαίδευσης</h4>
                      <p>Δείτε το πρόγραμμα επερχόμενων σεμιναρίων ασφαλείας</p>
                      <DefaultButton text="Δείτε ημερολόγιο" iconProps={{ iconName: 'CalendarAgenda' }} />
                    </div>
                  </div>
                </Stack>

                <div className={styles.certificationSection}>
                  <h3 className={styles.sectionTitle}>
                    <Icon iconName="Certificate" /> Πιστοποιήσεις
                  </h3>
                  <MessageBar messageBarType={MessageBarType.info}>
                    Μετά την ολοκλήρωση της εκπαίδευσης και την επιτυχή συμπλήρωση του quiz,
                    θα λάβετε πιστοποιητικό ασφαλείας που ισχύει για 12 μήνες.
                  </MessageBar>
                  <div className={styles.certificationDetails}>
                    <ul className={styles.rulesList}>
                      <li>Βασική εκπαίδευση ασφαλείας (8 ώρες)</li>
                      <li>Χρήση ΑΜΠ και εξοπλισμού ασφαλείας (4 ώρες)</li>
                      <li>Πρώτες βοήθειες και CPR (6 ώρες)</li>
                      <li>Διαχείριση επικίνδυνων υλικών (4 ώρες)</li>
                      <li>Πυρασφάλεια και εκκένωση (2 ώρες)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </PivotItem>
          </Pivot>

          {/* Footer */}
          <div className={styles.footer}>
            <MessageBar messageBarType={MessageBarType.info}>
              <Icon iconName="Info" /> Για οποιαδήποτε απορία σχετικά με τα ΑΜΠ, επικοινωνήστε με το Τμήμα Ασφαλείας στο εσωτερικό 250
            </MessageBar>
            <div className={styles.footerText}>
              <Text variant="small">
                Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')} |
                {companyName} - Πιστοποίηση ISO 45001:2018
              </Text>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderPPECard(icon: string, title: string, description: string, features: string[]): JSX.Element {
    return (
      <div className={styles.ppeCard}>
        <div className={styles.ppeCardHeader}>
          <Icon iconName={icon} className={styles.ppeIcon} />
          <h3 className={styles.ppeTitle}>{title}</h3>
        </div>
        <p className={styles.ppeDescription}>{description}</p>
        <ul className={styles.ppeFeatures}>
          {features.map((feature, index) => (
            <li key={index}>
              <Icon iconName="CheckMark" className={styles.checkIcon} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private renderZone(
    title: string,
    icon: string,
    color: string,
    ppe: string[],
    hazards: string[]
  ): JSX.Element {
    return (
      <div className={styles.zoneCard} style={{ borderLeftColor: color }}>
        <div className={styles.zoneHeader}>
          <Icon iconName={icon} className={styles.zoneIcon} style={{ color: color }} />
          <h3 className={styles.zoneTitle}>{title}</h3>
        </div>
        <div className={styles.zoneContent}>
          <div className={styles.zoneSection}>
            <h4 className={styles.zoneSectionTitle}>
              <Icon iconName="Shield" className={styles.sectionIcon} />
              Απαιτούμενα ΑΜΠ:
            </h4>
            <ul className={styles.zoneList}>
              {ppe.map((item, index) => (
                <li key={index}>
                  <Icon iconName="CheckMark" className={styles.checkIcon} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.zoneSection}>
            <h4 className={styles.zoneSectionTitle}>
              <Icon iconName="Warning" className={styles.sectionIcon} />
              Κίνδυνοι:
            </h4>
            <ul className={styles.zoneList}>
              {hazards.map((hazard, index) => (
                <li key={index} className={styles.hazardItem}>
                  <Icon iconName="StatusErrorFull" className={styles.hazardIcon} />
                  {hazard}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  private renderEmergencyCard(icon: string, title: string, steps: string[], color: string): JSX.Element {
    return (
      <div className={styles.emergencyCard} style={{ borderTopColor: color }}>
        <div className={styles.emergencyHeader}>
          <Icon iconName={icon} className={styles.emergencyIcon} style={{ color: color }} />
          <h4 className={styles.emergencyTitle}>{title}</h4>
        </div>
        <ol className={styles.emergencySteps}>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
}
