/* ============ STATE ============ */
let state = {
  tab: 'dashboard',
  stylist: '',
  newCustomerPrefill: null,
  tempMembershipSelection: null,

  // Inward Materials (stock purchase entries)
  dbSyncWarnings: [],
  activityLogs: [],
  activityLogSearch: '',
  activityLogDateFrom: '',
  activityLogDateTo: '',
  inwardEntries: [],
  inwardDraftItems: [],
  stockMovements: [],
  stockReportMonth: '',
  stockReportDateFrom: '',
  stockReportDateTo: '',
  inwardBillFile: null,
  inwardDraftSupplier: '',
  inwardDraftDate: '',
  inwardDraftInvoiceNumber: '',
  inwardDraftNotes: '',
  inwardSearch: '',
  inwardDateFrom: '',
  inwardDateTo: '',

  auth: {
    isAuthenticated: false,
    user: null
  },
  loginScreenRole: null,
  loginBusy: false,
  
  // Dashboard UI Filters
  staffSectionCollapsed: false,
  dashboardStatsCollapsed: true,
  recentInvoicesCollapsed: false,
  paymentModeCollapsed: false,
  staffSearch: '',
  // Defaults to TODAY, same rollover behaviour as the dashboard stat boxes —
  // staffLastKnownDay tracks the last day it was auto-set to.
  staffDateFrom: todayKey(),
  staffDateTo: todayKey(),
  staffLastKnownDay: todayKey(),

  usersSearch: '',
  servicesSearch: '',
  productsSearch: '',

  // Product Sales Report UI Filters
  productSectionCollapsed: false,
  productSearch: '',
  productDateFrom: '',
  productDateTo: '',

  // Dynamic Membership Plans
  memberships: [
    { id: 'mem_1', name: 'Gold', discountType: 'percent', discountValue: 20 },
    { id: 'mem_2', name: 'Platinum', discountType: 'percent', discountValue: 30 },
    { id: 'mem_3', name: 'Silver', discountType: 'percent', discountValue: 10 }
  ],

  customers: [
    {id:'C1', name:'Priya Ramesh', mobile:'9840012345', email:'priya.r@example.com', dob:'1994-03-12', gender:'Female', membershipId:'mem_1', points:420, preferredStylist:'Anitha'},
    {id:'C2', name:'Karthik Subramaniam', mobile:'9884456123', email:'', dob:'', gender:'Male', membershipId:null, points:60, preferredStylist:'Ravi'},
    {id:'C3', name:'Meena Iyer', mobile:'9962233110', email:'meena.iyer@example.com', dob:'1990-11-02', gender:'Female', membershipId:'mem_2', points:980, preferredStylist:'Anitha'},
    {id:'C4', name:'Divya Sundar', mobile:'9791122009', email:'', dob:'1998-07-19', gender:'Female', membershipId:'mem_3', points:150, preferredStylist:'Fathima'},
    {id:'C5', name:'Saran', mobile:'9514957566', email:'', dob:'', gender:'Male', membershipId:null, points:0, preferredStylist:''}
  ],
  users: [
    { id: 'U1', name: 'Anitha', role: 'Stylist', mobile: '9876543210', status: 'Active', dob: '1995-04-18' },
    { id: 'U2', name: 'Ravi', role: 'Stylist', mobile: '9876543211', status: 'Active', dob: '1992-08-05' },
    { id: 'U3', name: 'Fathima', role: 'Receptionist', mobile: '9876543212', status: 'Active', dob: '1997-01-22' },
    { id: 'U4', name: 'Ramesh', role: 'Stylist', mobile: '9876543213', status: 'Active' },
    { id: 'U5', name: 'Suresh', role: 'Stylist', mobile: '9876543214', status: 'Active' },
    { id: 'U6', name: 'Alex', role: 'Stylist', mobile: '9876543215', status: 'Active' }
  ],
  services: [
    {id:'S1', code:'HR-CUT', name:'Haircut & Style', category:'Hair', duration:45, price:600, gst:18, commission:10},
    {id:'S2', code:'HR-SPA', name:'Hair Spa', category:'Hair', duration:60, price:1200, gst:18, commission:10},
    {id:'S3', code:'HR-CLR', name:'Global Hair Colour', category:'Hair Colour', duration:90, price:2800, gst:18, commission:12},
    {id:'S4', code:'HR-KRT', name:'Keratin Treatment', category:'Hair', duration:120, price:4500, gst:18, commission:15},
    {id:'S5', code:'SK-FCL', name:'Classic Facial', category:'Skin', duration:45, price:1500, gst:18, commission:10},
    {id:'S6', code:'SK-HYD', name:'Hydra Facial', category:'Skin', duration:60, price:2500, gst:18, commission:12},
    {id:'S7', code:'SK-DTN', name:'De-tan', category:'Skin', duration:30, price:500, gst:18, commission:8},
    {id:'S8', code:'MK-PRT', name:'Party Makeup', category:'Makeup', duration:60, price:2000, gst:18, commission:15},
    {id:'S9', code:'MK-BRD', name:'Bridal Makeup', category:'Makeup', duration:150, price:12000, gst:18, commission:15},
    {id:'S10', code:'NL-MAN', name:'Manicure', category:'Nails', duration:30, price:500, gst:18, commission:8},
    {id:'S11', code:'NL-PED', name:'Pedicure', category:'Nails', duration:40, price:600, gst:18, commission:8},
    {id:'S12', code:'WX-FUL', name:'Full Arms & Legs Waxing', category:'Waxing', duration:45, price:900, gst:18, commission:8},
    {id:'S13', code:'TH-EYE', name:'Eyebrow Threading', category:'Threading', duration:10, price:100, gst:18, commission:5},
    {id:'S14', code:'SP-MSG', name:'Relaxing Massage (60 min)', category:'Spa', duration:60, price:1800, gst:18, commission:12},
  ],
  products: [
    {id:'P1', name:'Argan Shampoo 250ml', brand:'L\'Oreal Pro', category:'Hair Care', sku:'LP-SH-250', mrp:850, price:850, gst:18, stock:22, minStock:5},
    {id:'P2', name:'Keratin Serum 100ml', brand:'Wella', category:'Hair Care', sku:'WL-SR-100', mrp:1200, price:1200, gst:18, stock:8, minStock:6},
    {id:'P3', name:'Hydrating Face Cream', brand:'Lakme', category:'Skin Care', sku:'LK-FC-50', mrp:650, price:650, gst:18, stock:4, minStock:6},
    {id:'P4', name:'Nail Polish - Ruby Red', brand:'Maybelline', category:'Nails', sku:'MB-NP-RR', mrp:220, price:220, gst:18, stock:30, minStock:10},
    {id:'P5', name:'Sunscreen SPF 50', brand:'Lotus Herbals', category:'Skin Care', sku:'LT-SS-50', mrp:495, price:495, gst:18, stock:2, minStock:5},
  ],
  bills: [],
  appointments: [],
  navOpen: (typeof window !== 'undefined' ? window.innerWidth > 768 : true),
  appointmentsFilterDate: '',
  pendingAppointmentsCollapsed: false,
  apDraft: null,
  apCustomerSuggestions: [],
  cart: [],
  discount: {type:'flat', value:0},
  membershipOverrideValue: null,
  coupon: '',
  couponMsg: null,
  coupons: [],
  couponCodeHistory: [],
  couponForm: { name:'', type:'flat', value:'', minBill:'', expiry:'', code:'' },
  tip: 0,
  paymentSplits: [{method:'Cash', amount:0, manual:false}],
  amountReceived: 0,
  selectedCustomer: '',
  walkInDetails: { name: '', mobile: '' },
  isB2BInvoice: false,
  b2bPartyGst: '',
  isIGST: false,
  catalogSearch: '',
  catalogHighlightIndex: 0,
  catalogFilter: 'All',
  showPreview: false,
  previewBill: null,
  modal: null,
  editingId: null,
  pendingStaffLineId: null,
  toast: null,
  isScanning: false,
  birthdayAlertLog: {},
  settings: {
    salonName: 'TARO Signature Salon',
    gstNumber: '33ABCDE1234F1Z5',
    defaultGst: 18,
    defaultMembershipDiscount: 20,
    invoicePrefix: 'INV',
    phone: '9876543210',
    address: '123, Main Road, City Center',
    lowStockEmail: '',
    autoEmailAlert: true,
    emailjsPublicKey: '',
    emailjsServiceId: '',
    emailjsTemplateId: '',
    adminPin: '1234',
    staffPin: '0000',
  },
  // Dashboard stat-box date filter — defaults to TODAY so old data never
  // lingers on screen the next day; dashboardLastKnownDay tracks the last
  // day it was auto-set to, so we know whether to roll it forward on a new
  // day (only when the user hasn't deliberately picked their own range).
  dashboardDateFrom: todayKey(),
  dashboardDateTo: todayKey(),
  dashboardLastKnownDay: todayKey(),
  // Auditor Reports filters
  reportsDateFrom: '',
  reportsDateTo: '',
  reportsSearch: '',
  gstReportActiveOnly: true,
  gstReportMonth: '',
  gstReportDateFrom: '',
  gstReportDateTo: '',
  // Customer Discount Report filters
  discountReportDateFrom: '',
  discountReportDateTo: '',
  discountReportSearch: '',
  discountReportExpanded: null,
  bankDetails: {
    accountHolder: 'TARO Signature Salon',
    accountNumber: '987654321012',
    ifscCode: 'HDFC0001234',
    bankName: 'HDFC Bank',
    upiId: 'tarosalon@upi',
  }
};

/* ============ SUPABASE DATABASE LAYER ============ */
// Connects this app to the Supabase project (see taro_salon_schema.sql for
// the table definitions). Requires the Supabase client library loaded on
// the page BEFORE this script, e.g. in index.html:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
const SUPABASE_URL = 'https://eidfoikmhgkgnrnooaiz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gRZ9NbNCCOgqZTgyeZe98Q_4dNbKLoN';
let sb = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
  sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  console.warn('Supabase client library not found — app will run in local-only mode. Add the CDN script tag before script.js.');
}

// ---- row <-> app-state mappers (DB uses snake_case, app uses camelCase) ----
const dbMap = {
  customerToRow: c => ({
    id: c.id, name: c.name, mobile: c.mobile, email: c.email || null, dob: c.dob || null,
    gender: c.gender || null, gst_number: c.gstNumber || null, membership_id: c.membershipId || null,
    membership_amount_paid: c.membershipAmountPaid ?? null, points: c.points || 0,
    preferred_stylist: c.preferredStylist || null
  }),
  customerFromRow: r => ({
    id: r.id, name: r.name, mobile: r.mobile, email: r.email || '', dob: r.dob || '',
    gender: r.gender || '', gstNumber: r.gst_number || '', membershipId: r.membership_id,
    membershipAmountPaid: r.membership_amount_paid, points: r.points || 0,
    preferredStylist: r.preferred_stylist || ''
  }),
  serviceToRow: s => ({
    id: s.id, code: s.code, name: s.name, category: s.category || 'General',
    duration: s.duration || null, price: s.price || 0,
    membership_price: s.membershipPrice ?? null, gst: s.gst ?? 18, commission: s.commission ?? 10,
    hsn_code: s.hsnCode || null, sac_code: s.sacCode || null
  }),
  serviceFromRow: r => ({
    id: r.id, code: r.code, name: r.name, category: r.category || 'General',
    duration: r.duration, price: r.price || 0, membershipPrice: r.membership_price,
    gst: r.gst ?? 18, commission: r.commission ?? 10, hsnCode: r.hsn_code || '', sacCode: r.sac_code || ''
  }),
  productToRow: p => ({
    id: p.id, name: p.name, brand: p.brand || null, category: p.category || 'General',
    sku: p.sku || null, mrp: p.mrp ?? null, price: p.price || 0, gst: p.gst ?? 18,
    stock: p.stock || 0, min_stock: p.minStock ?? 5
  }),
  productFromRow: r => ({
    id: r.id, name: r.name, brand: r.brand || '', category: r.category || 'General',
    sku: r.sku || '', mrp: r.mrp, price: r.price || 0, gst: r.gst ?? 18,
    stock: r.stock || 0, minStock: r.min_stock ?? 5
  }),
  billToRow: b => ({
    id: b.id, date: b.date, customer_id: b.customerId || null, stylist: b.stylist || null,
    items: b.items || [], subtotal: b.subtotal || 0, gst: b.gst || 0,
    membership_discount: b.membershipDiscount || 0, discount: b.discount || 0, tip: b.tip || 0,
    total: b.total || 0, payments: b.payments || [], amount_received: b.amountReceived || 0,
    balance_returned: b.balanceReturned || 0, status: b.status || 'ACTIVE',
    is_b2b: !!b.isB2B, party_gst: b.partyGst || null, is_igst: !!b.isIGST,
    audited_at: b.auditedAt || null
  }),
  billFromRow: r => ({
    id: r.id, date: r.date, customerId: r.customer_id, stylist: r.stylist,
    items: r.items || [], subtotal: r.subtotal || 0, gst: r.gst || 0,
    membershipDiscount: r.membership_discount || 0, discount: r.discount || 0, tip: r.tip || 0,
    total: r.total || 0, payments: r.payments || [], amountReceived: r.amount_received || 0,
    balanceReturned: r.balance_returned || 0, status: r.status || 'ACTIVE',
    isB2B: !!r.is_b2b, partyGst: r.party_gst || '', isIGST: !!r.is_igst, auditedAt: r.audited_at
  }),
  appointmentToRow: a => ({
    id: a.id, date: a.date, time: a.time, customer_id: a.customerId || null,
    customer_name: a.customerName || '', customer_mobile: a.customerMobile || '',
    service_id: a.serviceId || null, service_name: a.serviceName || '',
    stylist: a.stylist || '', status: a.status || 'Pending', notes: a.notes || ''
  }),
  appointmentFromRow: r => ({
    id: r.id, date: r.date, time: r.time, customerId: r.customer_id,
    customerName: r.customer_name || '', customerMobile: r.customer_mobile || '',
    serviceId: r.service_id, serviceName: r.service_name || '',
    stylist: r.stylist || '', status: r.status || 'Pending', notes: r.notes || '',
    createdAt: r.created_at
  }),
  couponToRow: c => ({
    id: c.id, code: c.code, name: c.name, type: c.type || 'flat', value: c.value,
    min_bill: c.minBill || 0, expiry: c.expiry || null, active: !!c.active,
    used_count: c.usedCount || 0, used_at: c.usedAt || null
  }),
  couponFromRow: r => ({
    id: r.id, code: r.code, name: r.name, type: r.type || 'flat', value: r.value,
    minBill: r.min_bill || 0, expiry: r.expiry || '', active: !!r.active,
    usedCount: r.used_count || 0, usedAt: r.used_at, createdAt: r.created_at
  }),
  inwardToRow: e => ({
    id: e.id, date: e.date, supplier: e.supplier, invoice_number: e.invoiceNumber || null,
    notes: e.notes || null, items: e.items || [], total_qty: e.totalQty || 0,
    total_cost: e.totalCost || 0, bill_file_name: e.billFile ? e.billFile.name : null
  }),
  inwardFromRow: r => ({
    id: r.id, date: r.date, supplier: r.supplier, invoiceNumber: r.invoice_number || '',
    notes: r.notes || '', items: r.items || [], totalQty: r.total_qty || 0,
    totalCost: r.total_cost || 0, billFile: r.bill_file_name ? { name: r.bill_file_name } : null
  }),
  userToRow: u => ({
    id: u.id, name: u.name, role: u.role || null, mobile: u.mobile || null,
    status: u.status || 'Active', dob: u.dob || null, doj: u.doj || null
  }),
  userFromRow: r => ({
    id: r.id, name: r.name, role: r.role || '', mobile: r.mobile || '',
    status: r.status || 'Active', dob: r.dob || '', doj: r.doj || ''
  }),
  movementToRow: m => ({
    id: m.id, date: m.date, product_id: m.productId, product_name: m.productName,
    sku: m.sku || null, old_stock: m.oldStock || 0, qty_added: m.qtyAdded || 0,
    new_stock: m.newStock || 0, supplier: m.supplier || null, invoice_number: m.invoiceNumber || null
  }),
  movementFromRow: r => ({
    id: r.id, date: r.date, productId: r.product_id, productName: r.product_name,
    sku: r.sku || '', oldStock: r.old_stock || 0, qtyAdded: r.qty_added || 0,
    newStock: r.new_stock || 0, supplier: r.supplier || '', invoiceNumber: r.invoice_number || ''
  }),
  settingsFromRow: r => ({
    salonName: r.salon_name, gstNumber: r.gst_number || '', defaultGst: r.default_gst ?? 18,
    defaultMembershipDiscount: r.default_membership_discount ?? 20, invoicePrefix: r.invoice_prefix || 'INV',
    phone: r.phone || '', address: r.address || '', lowStockEmail: r.low_stock_email || '',
    autoEmailAlert: !!r.auto_email_alert, emailjsPublicKey: r.emailjs_public_key || '',
    emailjsServiceId: r.emailjs_service_id || '', emailjsTemplateId: r.emailjs_template_id || '',
    adminPin: r.admin_pin || '1234', staffPin: r.staff_pin || '0000'
  }),
  settingsToRow: s => ({
    id: 1, salon_name: s.salonName, gst_number: s.gstNumber || null, default_gst: s.defaultGst,
    default_membership_discount: s.defaultMembershipDiscount, invoice_prefix: s.invoicePrefix,
    phone: s.phone || null, address: s.address || null, low_stock_email: s.lowStockEmail || null,
    auto_email_alert: !!s.autoEmailAlert, emailjs_public_key: s.emailjsPublicKey || null,
    emailjs_service_id: s.emailjsServiceId || null, emailjs_template_id: s.emailjsTemplateId || null,
    admin_pin: s.adminPin || '1234', staff_pin: s.staffPin || '0000',
    updated_at: new Date().toISOString()
  }),
  logToRow: l => ({
    id: l.id, created_at: l.createdAt, user_name: l.userName || null,
    user_role: l.userRole || null, action: l.action, details: l.details || null
    // Note: an earlier version also sent created_at_ist (a readable IST
    // timestamp for the Supabase dashboard). Reverted — Supabase's schema
    // cache kept failing to recognize that column reliably, which broke
    // real activity-log syncing. The app itself already displays correct
    // IST time; only the raw Supabase Table Editor view shows UTC.
  }),
  logFromRow: r => ({
    id: r.id, createdAt: r.created_at, userName: r.user_name || 'Unknown',
    userRole: r.user_role || '', action: r.action, details: r.details || ''
  })
};

// Fire-and-forget write helper — keeps the UI instant (state is already
// updated locally before this runs) while still syncing to the database.
// Logs + toasts quietly on failure so a flaky connection never blocks work.
function dbWrite(promise, label){
  if(!sb) return;
  promise.then(({ error }) => {
    if(error){
      console.error(`[DB] ${label} failed:`, error);
      addDbSyncWarning(label, error.message || 'Unknown error');
    }
  }).catch(err => {
    console.error(`[DB] ${label} error:`, err);
    addDbSyncWarning(label, err.message || 'Unknown error');
  });
}

function addDbSyncWarning(label, message){
  state.dbSyncWarnings = state.dbSyncWarnings || [];
  state.dbSyncWarnings.unshift({ label, message, time: new Date() });
  state.dbSyncWarnings = state.dbSyncWarnings.slice(0, 10);

  // Record the failure itself in the Activity Log — kept locally only (no
  // dbWrite here), since the database connection is exactly what's failing;
  // trying to sync this entry too would just repeat the same error.
  state.activityLogs = state.activityLogs || [];
  state.activityLogs.unshift({
    id: uid('LOG'),
    createdAt: new Date().toISOString(),
    userName: (state.auth.user && state.auth.user.name) || 'System',
    userRole: (state.auth.user && state.auth.user.role) || '',
    action: 'Database Sync Failed',
    details: `${label} — ${message}`
  });
  state.activityLogs = state.activityLogs.slice(0, 500);

  render();
}

function dismissDbSyncWarnings(){
  state.dbSyncWarnings = [];
  render();
}

// Records who did what, when — an append-only audit trail. Kept locally
// (most recent first, capped so memory doesn't grow forever) and synced
// to Supabase so Admin can review it later even after a refresh.
function logActivity(action, details){
  const entry = {
    id: uid('LOG'),
    createdAt: new Date().toISOString(),
    userName: (state.auth.user && state.auth.user.name) || 'System',
    userRole: (state.auth.user && state.auth.user.role) || '',
    action,
    details: details || ''
  };
  state.activityLogs = state.activityLogs || [];
  state.activityLogs.unshift(entry);
  state.activityLogs = state.activityLogs.slice(0, 500);
  dbWrite(sb && sb.from('activity_logs').insert(dbMap.logToRow(entry)), 'Log activity');
}

async function dbLoadAll(){
  if(!sb) return false;
  let anyTableFailed = false;

  // Each table is fetched and applied independently — if one table has a
  // problem (missing table, RLS blocking it, no settings row yet, etc.) the
  // other 9 still load normally instead of the whole app falling back to
  // blank demo data.
  const tasks = [
    { name: 'memberships', run: () => sb.from('memberships').select('*'),
      apply: (data) => { if(data && data.length) state.memberships = data.map(r => ({
        id: r.id, name: r.name,
        // Backward compatible with older DB rows that only had discount_percent.
        discountType: r.discount_type || 'percent',
        discountValue: (r.discount_value !== undefined && r.discount_value !== null) ? r.discount_value : r.discount_percent
      })); } },
    { name: 'users', run: () => sb.from('users').select('*'),
      apply: (data) => { if(data && data.length) state.users = data.map(dbMap.userFromRow); } },
    { name: 'customers', run: () => sb.from('customers').select('*'),
      apply: (data) => { if(data) state.customers = data.map(dbMap.customerFromRow); } },
    { name: 'services', run: () => sb.from('services').select('*'),
      apply: (data) => { if(data && data.length) state.services = data.map(dbMap.serviceFromRow); } },
    { name: 'products', run: () => sb.from('products').select('*'),
      apply: (data) => { if(data && data.length) state.products = data.map(dbMap.productFromRow); } },
    { name: 'bills', run: () => sb.from('bills').select('*').order('date', { ascending: false }),
      apply: (data) => { if(data) state.bills = data.map(dbMap.billFromRow); } },
    { name: 'appointments', run: () => sb.from('appointments').select('*').order('date', { ascending: true }).order('time', { ascending: true }),
      apply: (data) => { if(data) state.appointments = data.map(dbMap.appointmentFromRow); } },
    { name: 'coupons', run: () => sb.from('coupons').select('*').order('created_at', { ascending: false }),
      apply: (data) => { if(data) state.coupons = data.map(dbMap.couponFromRow); } },
    { name: 'inward_entries', run: () => sb.from('inward_entries').select('*').order('date', { ascending: false }),
      apply: (data) => { if(data) state.inwardEntries = data.map(dbMap.inwardFromRow); } },
    { name: 'stock_movements', run: () => sb.from('stock_movements').select('*').order('date', { ascending: false }),
      apply: (data) => { if(data) state.stockMovements = data.map(dbMap.movementFromRow); } },
    { name: 'settings', run: () => sb.from('settings').select('*').eq('id', 1).maybeSingle(),
      apply: (data) => { if(data) state.settings = { ...state.settings, ...dbMap.settingsFromRow(data) }; } },
    { name: 'activity_logs', run: () => sb.from('activity_logs').select('*').order('created_at', { ascending: false }).limit(500),
      apply: (data) => { if(data) state.activityLogs = data.map(dbMap.logFromRow); } },
  ];

  await Promise.all(tasks.map(async task => {
    try {
      const res = await task.run();
      if(res.error){
        console.error(`[DB] Load "${task.name}" failed:`, res.error);
        anyTableFailed = true;
        return;
      }
      task.apply(res.data);
    } catch(err){
      console.error(`[DB] Load "${task.name}" error:`, err);
      anyTableFailed = true;
    }
  }));

  if(anyTableFailed){
    showToast('⚠️ Some data failed to load from the database — check console for details');
  }
  return true;
}

const TARO_LOGO_DATA_URI = 'logo.png';

function money(n){
  n = Math.round((n + Number.EPSILON) * 100) / 100;
  return '₹' + n.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
}
function uid(prefix){ return prefix + Math.random().toString(36).slice(2,8); }

// ---- Shared, timezone-safe date-range filter ----
// Compares using LOCAL calendar-day strings (YYYY-MM-DD) instead of raw
// Date objects, so "From" and "To" date-picker filters always behave the
// same way regardless of what time of day a bill/entry was saved, or
// whether its `date` field is a JS Date, an ISO string, or a plain
// "YYYY-MM-DD" string coming back from the DB.
function toLocalDayKey(value){
  const d = (value instanceof Date) ? value : new Date(value);
  if(isNaN(d.getTime())) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function isDateInRange(value, fromStr, toStr){
  const key = toLocalDayKey(value);
  if(!key) return false; // invalid/missing date never matches an active filter
  if(fromStr && key < fromStr) return false;
  if(toStr && key > toStr) return false;
  return true;
}
function todayKey(){ return toLocalDayKey(new Date()); }

function generateInvoiceId(dateValue){
  const d = dateValue ? new Date(dateValue) : new Date();
  const monthNames = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();

  // Sequence resets for every month/year:
  // INV-01/jan/2026, INV-02/jan/2026 ... INV-01/feb/2026
  const prefix = `INV-`;
  const monthYear = `/${month}/${year}`;
  const usedNumbers = state.bills
    .map(b => String(b.id || '').match(/^INV-(\d+)\/([a-z]{3})\/(\d{4})$/i))
    .filter(m => m && m[2].toLowerCase() === month && Number(m[3]) === year)
    .map(m => Number(m[1]))
    .filter(Number.isFinite);

  let nextNumber = usedNumbers.length ? Math.max(...usedNumbers) + 1 : 1;
  let id = prefix + String(nextNumber).padStart(2,'0') + monthYear;

  // Extra safety if an existing ID already has the same number.
  while(state.bills.some(b => String(b.id).toUpperCase() === id.toUpperCase())){
    nextNumber += 1;
    id = prefix + String(nextNumber).padStart(2,'0') + monthYear;
  }

  return id;
}

function showToast(msg){
  state.toast = msg;
  render();
  setTimeout(()=>{ state.toast=null; render(); }, 2200);
}
function groupBy(arr, key){
  return arr.reduce((acc,item)=>{
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

function downloadCSV(filename, csvContent) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  // Central point for every CSV export in the app — logging here covers
  // all of them (reports, GST filing, staff/product summaries, etc.)
  // without needing a separate logActivity call in each export function.
  logActivity('Exported CSV', filename);
}

/* ============ LOW STOCK → EMAIL ALERT ============ */
function getLowStockProducts(){
  return state.products.filter(p => p.stock <= p.minStock);
}
function sendLowStockEmailAlert(products){
  const list = products && products.length ? products : getLowStockProducts();
  if(list.length === 0){ showToast('No low-stock products right now'); return; }
  const s = state.settings;
  if(!s.lowStockEmail){ showToast('Add an alert email address in Settings first'); return; }
  if(!s.emailjsPublicKey || !s.emailjsServiceId || !s.emailjsTemplateId){
    showToast('EmailJS not fully configured — check Settings');
    return;
  }
  if(typeof emailjs === 'undefined'){
    showToast('Email service still loading — try again in a moment');
    return;
  }
  // Persist whatever's currently in the Settings fields — this button used
  // to only send a test email without saving, which confused people into
  // thinking their EmailJS keys were saved when they weren't.
  dbWrite(sb && sb.from('settings').upsert(dbMap.settingsToRow(state.settings)), 'Save settings');
  const lines = list.map(p => `${p.name} — ${p.stock} left (min ${p.minStock})`).join('\n');
  const templateParams = {
    to_email: s.lowStockEmail,
    salon_name: s.salonName,
    stock_list: lines,
    message: `Low Stock Alert - ${s.salonName}\n\n${lines}\n\nPlease reorder soon.`
  };
  emailjs.send(s.emailjsServiceId, s.emailjsTemplateId, templateParams, { publicKey: s.emailjsPublicKey })
    .then(()=>{ logActivity('Sent Low Stock Email', `${list.length} product(s)`); showToast('Low stock email sent!'); })
    .catch((err)=>{ console.error(err); showToast('Email failed to send — check EmailJS settings'); });
}
function checkAndAlertNewLowStock(productIds){
  const nowLow = state.products.filter(p => productIds.includes(p.id) && p.stock <= p.minStock);
  if(nowLow.length === 0) return;
  if(state.settings.autoEmailAlert && state.settings.lowStockEmail && state.settings.emailjsPublicKey){
    sendLowStockEmailAlert(nowLow);
  }
}

/* ============ DAILY FULL STOCK REPORT (all products, not just low ones) ============
   Fully automatic — sent by EMAIL (not WhatsApp), because browsers only
   allow email sends like this to fire silently; a WhatsApp wa.me link
   always needs a manual tap inside WhatsApp itself, so it can't be made
   truly automatic from here. Reuses the same EmailJS setup + address as
   the Low Stock Email Alerts. The "enabled" flag and "last sent" date are
   stored in localStorage (per-device), not the Supabase settings row. */
function isDailyStockReportEnabled(){
  return localStorage.getItem('taro_daily_stock_report_enabled') === 'yes';
}
function setDailyStockReportEnabled(v){
  localStorage.setItem('taro_daily_stock_report_enabled', v ? 'yes' : 'no');
}
function getLastStockReportDate(){
  return localStorage.getItem('taro_last_stock_report_date') || '';
}
function setLastStockReportDate(d){
  localStorage.setItem('taro_last_stock_report_date', d);
}
function sendDailyStockReportEmail(){
  const s = state.settings;
  if(!s.lowStockEmail){ showToast('Add an alert email address in Settings first (Low Stock Email Alerts card)'); return; }
  if(!s.emailjsPublicKey || !s.emailjsServiceId || !s.emailjsTemplateId){
    showToast('EmailJS not fully configured — check Settings');
    return;
  }
  if(typeof emailjs === 'undefined'){
    showToast('Email service still loading — try again in a moment');
    return;
  }
  if(state.products.length === 0){ showToast('No products to report'); return; }
  // Persist current Settings fields too — same reasoning as the low-stock
  // alert button above.
  dbWrite(sb && sb.from('settings').upsert(dbMap.settingsToRow(state.settings)), 'Save settings');
  const lines = state.products
    .slice()
    .sort((a,b)=> a.name.localeCompare(b.name))
    .map(p => `${p.name}${p.sku ? ' ('+p.sku+')' : ''} — ${p.stock} in stock${p.stock <= p.minStock ? ' ⚠️ LOW' : ''}`)
    .join('\n');
  const templateParams = {
    to_email: s.lowStockEmail,
    salon_name: s.salonName,
    stock_list: lines,
    message: `📦 Daily Stock Report - ${s.salonName}\n${todayKey()}\n\n${lines}`
  };
  emailjs.send(s.emailjsServiceId, s.emailjsTemplateId, templateParams, { publicKey: s.emailjsPublicKey })
    .then(()=>{ showToast('Daily stock report emailed!'); setLastStockReportDate(todayKey()); logActivity('Sent Daily Stock Report', `${state.products.length} product(s)`); })
    .catch((err)=>{ console.error(err); showToast('Daily stock report email failed — check EmailJS settings'); });
}
function checkDailyStockReport(){
  if(!isDailyStockReportEnabled()) return;
  if(getLastStockReportDate() === todayKey()) return; // already sent today
  sendDailyStockReportEmail(); // fires silently, no click needed
}

/* ============ MEMBERSHIP MANAGEMENT FUNCTIONS ============ */
function addMembershipPlan(name, type, value) {
  if (!name || value === '' || value === null || value === undefined) {
    showToast('Please enter Plan Name and Discount Value');
    return;
  }
  type = (type === 'flat') ? 'flat' : 'percent';
  state.memberships.push({
    id: 'mem_' + Date.now(),
    name: name.trim(),
    discountType: type,
    discountValue: Number(value)
  });
  logActivity('Added Membership Plan', `${name.trim()} — ${type === 'flat' ? money(Number(value)) : Number(value)+'%'}`);
  showToast('New Membership Plan Added!');
  render();
}

function updateMembershipPlan(planId, type, newValue) {
  const plan = state.memberships.find(m => m.id === planId);
  if (plan) {
    plan.discountType = (type === 'flat') ? 'flat' : 'percent';
    plan.discountValue = Number(newValue) || 0;
    logActivity('Updated Membership Plan', `${plan.name} — ${plan.discountType === 'flat' ? money(plan.discountValue) : plan.discountValue + '%'}`);
    showToast(`${plan.name} discount updated to ${plan.discountType === 'flat' ? money(plan.discountValue) : plan.discountValue + '%'}`);
    render();
  }
}

function deleteMembershipPlan(planId) {
  const plan = state.memberships.find(m => m.id === planId);
  if (confirm('Delete this membership plan?')) {
    state.memberships = state.memberships.filter(m => m.id !== planId);
    state.customers.forEach(c => {
      if (c.membershipId === planId) c.membershipId = null;
    });
    logActivity('Deleted Membership Plan', plan ? plan.name : planId);
    showToast('Membership Plan Removed');
    render();
  }
}

/* ============ CUSTOMER VALIDATION & SEARCH ============ */
function isCustomerInfoEntered(){
  return (state.selectedCustomer || state.walkInDetails.name.trim().length > 0 || state.walkInDetails.mobile.trim().length > 0);
}

function getActiveMembershipDiscount() {
  // Returns { type: 'percent'|'flat', value } — the effective membership
  // discount for the currently selected customer, honouring a manual
  // per-bill override if the staff edited it in Step 3.
  const cust = state.customers.find(c => c.id === state.selectedCustomer);
  const plan = (cust && cust.membershipId) ? state.memberships.find(m => m.id === cust.membershipId) : null;
  if (!plan) {
    return { type: 'flat', value: 0 };
  }
  const value = state.membershipOverrideValue !== null ? state.membershipOverrideValue : plan.discountValue;
  return { type: plan.discountType, value };
}

function formatPlanDiscount(plan){
  if(!plan) return '';
  return plan.discountType === 'flat' ? money(plan.discountValue) : plan.discountValue + '%';
}

function getCustomerMembershipObject(cust) {
  if (!cust || !cust.membershipId) return null;
  return state.memberships.find(m => m.id === cust.membershipId) || null;
}

// Live autocomplete suggestions as the customer name is typed. Updates the
// DOM directly (no full render) so typing stays smooth.
function handleCustomerNameInput(value){
  state.walkInDetails.name = value;
  const box = document.getElementById('customer-name-suggestions');
  if(!box) return;

  const query = value.trim().toLowerCase();
  if(!query){ box.style.display = 'none'; box.innerHTML = ''; return; }

  const matches = state.customers.filter(c =>
    c.name.toLowerCase().split(/\s+/).some(word => word.startsWith(query))
  ).slice(0, 6);

  if(matches.length === 0){ box.style.display = 'none'; box.innerHTML = ''; return; }

  box.innerHTML = matches.map(c => `
    <div style="padding:8px 10px; font-size:13px; cursor:pointer; border-bottom:1px solid #f0f0f0;"
      onmousedown="selectCustomerSuggestion('${c.id}')"
      onmouseover="this.style.background='var(--ivory)'" onmouseout="this.style.background='#fff'">
      <b>${c.name}</b> <span style="color:var(--text-dim); font-size:11px;">${c.mobile}</span>
    </div>
  `).join('');
  box.style.display = 'block';
}

function hideCustomerSuggestions(){
  const box = document.getElementById('customer-name-suggestions');
  if(box){ box.style.display = 'none'; }
}

function selectCustomerSuggestion(customerId){
  const cust = state.customers.find(c => c.id === customerId);
  if(!cust) return;
  state.selectedCustomer = cust.id;
  state.walkInDetails = { name: cust.name, mobile: cust.mobile };
  state.membershipOverrideValue = null;
  hideCustomerSuggestions();
  showToast('Customer found: ' + cust.name);
  syncPaymentWithTotal();
  render();
}

function handleCustomerSearch() {
  const phoneQuery = state.walkInDetails.mobile.trim();
  const nameQuery = state.walkInDetails.name.trim().toLowerCase();

  if(!phoneQuery && !nameQuery) {
    showToast('Please enter Name or Phone Number to search');
    return;
  }

  let foundCust = null;
  if(phoneQuery) {
    foundCust = state.customers.find(c => c.mobile.includes(phoneQuery));
  }
  if(!foundCust && nameQuery) {
    // Match only if a WORD in the name starts with what was typed
    // (e.g. "kar" matches "Karthik", but "mani" no longer wrongly matches
    // inside "Subramaniam" just because it's a substring in the middle).
    foundCust = state.customers.find(c =>
      c.name.toLowerCase().split(/\s+/).some(word => word.startsWith(nameQuery))
    );
  }

  if(foundCust) {
    state.selectedCustomer = foundCust.id;
    state.walkInDetails = { name: foundCust.name, mobile: foundCust.mobile };
    state.membershipOverrideValue = null;
    const plan = getCustomerMembershipObject(foundCust);
    if(plan) {
      showToast(`${plan.name} Member found! Standard ${formatPlanDiscount(plan)} discount applied.`);
    } else {
      showToast(`Customer found: ${foundCust.name}`);
    }
  } else {
    state.selectedCustomer = '';
    state.membershipOverrideValue = null;
    // Auto-open the Add Customer window, pre-filled with what was typed,
    // so staff can capture DOB / membership right away for a new customer.
    state.newCustomerPrefill = {
      name: state.walkInDetails.name.trim(),
      mobile: state.walkInDetails.mobile.trim(),
      dob: ''
    };
    state.tempMembershipSelection = null;
    state.modal = 'customer';
    state.editingId = null;
    showToast('New customer — add their details below');
  }
  syncPaymentWithTotal();
  render();
}

function resetCustomerSearch() {
  // Full reset — clears the customer, cart, discounts, membership override,
  // coupon, tip, stylist, and payment fields so nothing from the old draft
  // lingers on screen after pressing Reset.
  const hadItems = state.cart.length > 0;
  resetBillingDraft();
  if(hadItems) logActivity('Reset Bill Draft', 'Cart and customer cleared');
  showToast('Bill reset — starting fresh');
  render();
}

/* ============ CART & CALCULATIONS ============ */
function isCurrentCustomerMember(){
  if(!state.selectedCustomer) return false;
  const cust = state.customers.find(c=>c.id===state.selectedCustomer);
  return !!(cust && cust.membershipId);
}

// Builds the flat, in-order list of catalog rows exactly as they're
// rendered in Billing (services grouped by category, then products) —
// used for keyboard Up/Down highlighting and Enter-to-add.
function getVisibleCatalogEntries(){
  const search = (state.catalogSearch||'').trim().toLowerCase();
  const catFilter = state.catalogFilter || 'All';
  function matches(item){
    if(!search) return false; // nothing shown until a search is typed, matching current UI
    return item.name.toLowerCase().includes(search) || (item.code||item.sku||'').toLowerCase().includes(search);
  }
  const entries = [];
  if(catFilter !== 'Products'){
    const cats = groupBy(state.services, 'category');
    Object.entries(cats).forEach(([cat, items]) => {
      if(catFilter !== 'All' && catFilter !== cat) return;
      items.filter(matches).forEach(s => entries.push({ type:'service', id:s.id, disabled:false }));
    });
  }
  if(catFilter === 'All' || catFilter === 'Products'){
    state.products.filter(matches).forEach(p => entries.push({ type:'product', id:p.id, disabled: p.stock <= 0 }));
  }
  return entries;
}

// Click OR Enter on a catalog row both funnel through here: add the item,
// then clear the search box and re-focus it so the next item can be typed
// immediately — no manual clearing needed between adds.
function quickAddCatalogItem(type, itemId){
  const src = type === 'service' ? state.services : state.products;
  const item = src.find(i=>i.id===itemId);
  if(item && type==='product' && item.stock <= 0){
    showToast(item.name + ' is out of stock');
    return;
  }
  addToCart(type, itemId);
  state.catalogSearch = '';
  state.catalogHighlightIndex = 0;
  render();
}

// Up/Down moves the highlighted row, Enter adds whichever row is highlighted
// — so a whole item can be added without touching the mouse.
function handleCatalogSearchKeydown(evt){
  const entries = getVisibleCatalogEntries();
  if(evt.key === 'ArrowDown'){
    evt.preventDefault();
    if(entries.length === 0) return;
    state.catalogHighlightIndex = Math.min(entries.length - 1, (state.catalogHighlightIndex||0) + 1);
    render();
  } else if(evt.key === 'ArrowUp'){
    evt.preventDefault();
    if(entries.length === 0) return;
    state.catalogHighlightIndex = Math.max(0, (state.catalogHighlightIndex||0) - 1);
    render();
  } else if(evt.key === 'Enter'){
    evt.preventDefault();
    const idx = Math.min(state.catalogHighlightIndex||0, entries.length - 1);
    const picked = entries[idx];
    if(picked && !picked.disabled) quickAddCatalogItem(picked.type, picked.id);
  }
}

function addToCart(type, itemId){
  if(!isCustomerInfoEntered()){
    showToast('Please enter Customer Name or Phone Number first!');
    return;
  }

  const src = type === 'service' ? state.services : state.products;
  const item = src.find(i=>i.id===itemId);
  if(!item) return;

  if(type==='product' && item.stock <= 0){
    showToast(item.name + ' is out of stock');
    return;
  }

  const existing = state.cart.find(c=>c.refId===itemId && c.type===type);
  if(existing && type==='product'){
    if(existing.qty >= item.stock){
      showToast('Cannot add more than available stock (' + item.stock + ')');
      return;
    }
    existing.qty += 1;
  } else if(existing && type==='service'){
    showToast(item.name + ' already added');
    return;
  } else {
    // If the selected customer is a member and this service has a manually
    // set Membership Price, bill it at that price automatically.
    const isMember = type === 'service' && isCurrentCustomerMember();
    const hasMemberPrice = item.membershipPrice !== undefined && item.membershipPrice !== null && item.membershipPrice !== '';
    const effectivePrice = (isMember && hasMemberPrice) ? Number(item.membershipPrice) : item.price;

    state.cart.push({
      lineId: uid('L'), type, refId: itemId,
      name: item.name, price: effectivePrice, gst: item.gst !== undefined ? item.gst : state.settings.defaultGst, qty: 1,
      code: item.code || item.sku,
      sellerName: type === 'product' ? (primaryStylist() || '') : '',
      isMemberPrice: isMember && hasMemberPrice
    });

    // For services, immediately pop up a mandatory "who did this?" prompt —
    // the next item can't be added until this is confirmed, so every
    // service always has a staff attached from the moment it's added.
    if(type === 'service'){
      const newLine = state.cart[state.cart.length - 1];
      state.modal = 'assignStaff';
      state.pendingStaffLineId = newLine.lineId;
      state.editingId = null;
    }
  }
  syncPaymentWithTotal();
  render();
}

function serviceLines(){
  return state.cart.filter(c => c.type !== 'product');
}
function unassignedServiceLines(){
  return serviceLines().filter(c => !(c.sellerName||'').trim());
}
function primaryStylist(){
  if((state.stylist||'').trim()) return state.stylist.trim();
  const first = serviceLines().find(c => (c.sellerName||'').trim());
  if(first) return first.sellerName.trim();
  const anySeller = state.cart.find(c => (c.sellerName||'').trim() && c.sellerName !== 'Store Desk');
  return anySeller ? anySeller.sellerName.trim() : '';
}
function validateStylistAssignment(){
  const missing = unassignedServiceLines();
  if(missing.length){
    showToast('Please select staff for: ' + missing.map(m=>m.name).join(', '));
    return false;
  }
  if(!primaryStylist()){
    showToast('Please select a Stylist / Staff');
    return false;
  }
  return true;
}

function removeFromCart(lineId){
  state.cart = state.cart.filter(c=>c.lineId!==lineId);
  syncPaymentWithTotal();
  render();
}
function updateCartLineSeller(lineId, name){
  const line = state.cart.find(c=>c.lineId===lineId);
  if(line) line.sellerName = name;
  render();
}

function setQty(lineId, val){
  const line = state.cart.find(c=>c.lineId===lineId);
  if(!line) return;
  let q = Math.floor(Number(val));
  if(!q || q < 1) q = 1;
  if(line.type==='product'){
    const product = state.products.find(p=>p.id===line.refId);
    if(product && q > product.stock){
      q = product.stock > 0 ? product.stock : 1;
      showToast('Stock limit reached (' + product.stock + ' available)');
    }
  }
  line.qty = q;
  syncPaymentWithTotal();
  render();
}

function changeQty(lineId, delta){
  const line = state.cart.find(c=>c.lineId===lineId);
  if(!line) return;
  
  if(line.type==='product' && delta > 0){
    const product = state.products.find(p=>p.id===line.refId);
    if(product && line.qty + delta > product.stock){
      showToast('Stock limit reached (' + product.stock + ' available)');
      return;
    }
  }

  line.qty = Math.max(1, line.qty + delta);
  syncPaymentWithTotal();
  render();
}

function cartSubtotal(){
  return state.cart.reduce((s,l)=>s + l.price*l.qty, 0);
}
// GST must be calculated on the amount AFTER discounts, not the full price.
// E.g. Haircut ₹600 with ₹100 discount → GST is calculated on ₹500, not ₹600.
// Each line absorbs its proportional share of the overall discount/coupon
// (and, for services, its share of the membership discount too), then GST
// is computed on what's left of that line.
function cartGST(){
  const sub = cartSubtotal();
  const svcSub = serviceSubtotal();
  const generalDiscTotal = discountAmount() + couponAmount();   // applies across products + services
  const memberDiscTotal = membershipDiscountAmount();            // services only

  return state.cart.reduce((s,l)=> {
    const lineValue = l.price * l.qty;
    const itemGstRate = l.gst !== undefined ? l.gst : state.settings.defaultGst;

    const generalShare = sub > 0 ? (lineValue / sub) * generalDiscTotal : 0;
    const memberShare = (l.type === 'service' && svcSub > 0) ? (lineValue / svcSub) * memberDiscTotal : 0;

    const netLineValue = Math.max(0, lineValue - generalShare - memberShare);
    return s + (netLineValue * (itemGstRate / 100));
  }, 0);
}

function serviceSubtotal(){
  return serviceLines().reduce((s,l)=> s + l.price*l.qty, 0);
}

function membershipDiscountAmount() {
  // Membership discount applies to SERVICES only, never to products.
  const sub = serviceSubtotal();
  const { type, value } = getActiveMembershipDiscount();
  const v = Number(value) || 0;
  if (type === 'flat') return Math.min(v, sub);
  return sub * (v / 100);
}

function discountAmount(){
  const sub = cartSubtotal();
  if(state.discount.type==='flat') return Math.min(state.discount.value, sub);
  return sub * (state.discount.value/100);
}

/* ============ COUPON ENGINE ============ */
function getCouponCodeHistory(){
  try {
    const saved = JSON.parse(localStorage.getItem('taro_coupon_code_history') || '[]');
    return Array.isArray(saved) ? saved.map(x => String(x).toUpperCase()) : [];
  } catch(e) {
    return [];
  }
}

function rememberCouponCode(code){
  const key = String(code || '').trim().toUpperCase();
  if(!key) return;
  const history = getCouponCodeHistory();
  if(!history.includes(key)){
    history.push(key);
    localStorage.setItem('taro_coupon_code_history', JSON.stringify(history));
  }
  state.couponCodeHistory = history;
}

function generateCouponCode(){
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const history = getCouponCodeHistory();
  state.couponCodeHistory = history;
  let code = '';
  do {
    let core = '';
    for(let i=0;i<4;i++) core += letters[Math.floor(Math.random()*letters.length)];
    code = 'TARO-' + core + String(Math.floor(1000 + Math.random()*9000));
  } while(
    history.includes(code) ||
    state.coupons.some(c => String(c.code).toUpperCase() === code)
  );
  return code;
}

function refreshCouponCode(){
  state.couponForm.code = generateCouponCode();
  render();
}

function saveCouponEntry(){
  const f = state.couponForm;
  const name = (f.name||'').trim();
  const value = Number(f.value);
  if(!name){ showToast('Enter coupon name / title'); return; }
  if(!value || value <= 0){ showToast('Enter a valid coupon prize value'); return; }
  if(f.type === 'percent' && value > 100){ showToast('Percent cannot be more than 100'); return; }
  const code = (f.code||'').trim().toUpperCase() || generateCouponCode();
  const codeHistory = getCouponCodeHistory();
  if(state.coupons.some(c=>c.code===code) || codeHistory.includes(code)){
    showToast('That coupon code has already been generated/used. Please generate a new code.');
    state.couponForm.code = generateCouponCode();
    render();
    return;
  }
  const newCoupon = {
    id: uid('CP'),
    code, name,
    type: f.type === 'percent' ? 'percent' : 'flat',
    value,
    minBill: Number(f.minBill) || 0,
    expiry: f.expiry || '',
    active: true,
    usedCount: 0,
    usedAt: null,
    createdAt: new Date().toISOString()
  };
  state.coupons.unshift(newCoupon);
  dbWrite(sb && sb.from('coupons').insert(dbMap.couponToRow(newCoupon)), 'Save coupon');
  rememberCouponCode(code);
  logActivity('Created Coupon', `${code} — ${name} (${newCoupon.type === 'percent' ? value+'%' : money(value)})`);
  state.couponForm = { name:'', type:'flat', value:'', minBill:'', expiry:'', code: generateCouponCode() };
  showToast('Coupon ' + code + ' created');
  render();
}

function toggleCouponActive(id){
  const c = state.coupons.find(x=>x.id===id);
  if(c){
    c.active = !c.active;
    dbWrite(sb && sb.from('coupons').update({ active: c.active }).eq('id', c.id), 'Update coupon status');
    logActivity(c.active ? 'Activated Coupon' : 'Deactivated Coupon', c.code);
    showToast('Coupon ' + c.code + (c.active?' activated':' deactivated')); render();
  }
}

function deleteCoupon(id){
  if(!confirm('Delete this coupon?')) return;
  const c = state.coupons.find(x=>x.id===id);
  state.coupons = state.coupons.filter(c=>c.id!==id);
  dbWrite(sb && sb.from('coupons').delete().eq('id', id), 'Delete coupon');
  logActivity('Deleted Coupon', c ? c.code : id);
  showToast('Coupon deleted');
  render();
}

function copyCouponCode(code){
  if(navigator.clipboard) navigator.clipboard.writeText(code);
  showToast('Copied ' + code);
}

function findCoupon(code){
  const key = (code||'').trim().toUpperCase();
  if(!key) return null;
  return state.coupons.find(c => c.code.toUpperCase() === key) || null;
}

function evaluateCoupon(){
  const sub = cartSubtotal();
  const raw = (state.coupon||'').trim();
  if(!raw) return { amount:0, status:'empty', message:'' };
  const c = findCoupon(raw);
  if(!c) return { amount:0, status:'invalid', message:'Invalid coupon code' };
  if(c.usedCount && Number(c.usedCount) >= 1){
    return { amount:0, status:'invalid', message:'This coupon has already been used. Please use another coupon code.' };
  }
  if(!c.active) return { amount:0, status:'invalid', message:'This coupon is inactive' };
  if(c.expiry){
    const end = new Date(c.expiry + 'T23:59:59');
    if(new Date() > end) return { amount:0, status:'invalid', message:'Coupon expired on ' + c.expiry };
  }
  if(c.minBill && sub < c.minBill){
    return { amount:0, status:'invalid', message:'Minimum bill ' + money(c.minBill) + ' required' };
  }
  const amt = c.type === 'percent' ? sub * (Number(c.value)/100) : Math.min(Number(c.value), sub);
  const label = c.type === 'percent' ? c.value + '% off' : money(c.value) + ' off';
  return { amount: round2(amt), status:'valid', message: c.name + ' applied — ' + label, coupon: c };
}

function couponAmount(){
  return evaluateCoupon().amount;
}

function applyCouponCode(val){
  state.coupon = val;
  const res = evaluateCoupon();
  state.couponMsg = res.status === 'empty' ? null : { ok: res.status === 'valid', text: res.message };
  syncPaymentWithTotal();
  render();
}

function clearCouponCode(){
  state.coupon = '';
  state.couponMsg = null;
  state.couponMsg = null;
  syncPaymentWithTotal();
  render();
}

/* ============ BIRTHDAYS ============ */
function daysUntilBirthday(dob){
  if(!dob) return null;
  const d = new Date(dob);
  if(isNaN(d.getTime())) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  let next = new Date(today.getFullYear(), d.getMonth(), d.getDate());
  if(next < today) next = new Date(today.getFullYear()+1, d.getMonth(), d.getDate());
  return Math.round((next - today) / 86400000);
}

function getBirthdayNotificationItems(){
  const list = [];
  state.customers.forEach(c=>{
    const days = daysUntilBirthday(c.dob);
    if(days !== null && days >= 0) list.push({ name:c.name, dob:c.dob, days, kind:'Customer', mobile:c.mobile||'', email:c.email||'' });
  });
  state.users.forEach(u=>{
    const days = daysUntilBirthday(u.dob);
    if(days !== null && days >= 0) list.push({ name:u.name, dob:u.dob, days, kind:'Staff', mobile:u.mobile||'', email:'' });
  });
  return list.sort((a,b)=> a.days - b.days);
}

function getUpcomingBirthdays(windowDays){
  const limit = windowDays === undefined ? 45 : windowDays;
  return getBirthdayNotificationItems().filter(item => item.days <= limit);
}

function formatDobLabel(dob){
  const d = new Date(dob);
  return d.toLocaleDateString('en-IN', { day:'2-digit', month:'short' });
}

function sendBirthdayMessage(item){
  const safeName = (item.name || 'friend').split(' ')[0];
  const phone = (item.mobile || '').replace(/[^0-9]/g, '');
  const message = `Hi ${safeName}, wishing you a very happy birthday from ${state.settings.salonName}! Have a wonderful day!`;
  if(phone){
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const smsUrl = `sms:${phone}?body=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.open(smsUrl, '_blank', 'noopener,noreferrer');
  }
  return message;
}

function triggerBirthdayAlerts(){
  const todayKey = new Date().toISOString().slice(0,10);
  const logged = Array.isArray(state.birthdayAlertLog[todayKey]) ? state.birthdayAlertLog[todayKey] : [];
  const dueItems = getBirthdayNotificationItems().filter(item => item.days === 0);
  dueItems.forEach(item => {
    const id = `${item.kind}:${item.name}:${item.mobile||''}`;
    if(!logged.includes(id)){
      sendBirthdayMessage(item);
      logged.push(id);
    }
  });
  state.birthdayAlertLog[todayKey] = logged;
}

function renderBirthdayPanel(){
  triggerBirthdayAlerts();
  // Only "today" (0d) and "tomorrow" (1d) birthdays — no more 45-day lookahead.
  const list = getUpcomingBirthdays(1);
  return `
  <div class="card" style="width:100%; max-width:100%; padding:12px;">
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
      <h3 class="card-title" style="margin:0; font-size:13px;">🎂 Birthday Notifications</h3>
      <span style="font-size:10.5px; color:var(--text-dim);">Today & Tomorrow</span>
    </div>
    ${list.length===0 ? `<div style="font-size:11.5px; color:var(--text-dim);">No birthdays today or tomorrow. Add DOB in Customers / Staff.</div>` : `
    <div style="max-height:240px; overflow:auto; display:flex; flex-direction:column; gap:6px;">
      ${list.map(b=>`
        <div style="display:flex; align-items:center; gap:8px; font-size:12px; border-bottom:1px dashed var(--line); padding-bottom:6px;">
          <div style="flex:1;">
            <div><b>${b.name}</b></div>
            <div style="font-size:10.5px; color:var(--text-dim);">${b.kind} · ${formatDobLabel(b.dob)}${b.mobile? ' · '+b.mobile : ''}</div>
          </div>
          <span class="tag ${b.days===0 ? 'tag-gold' : 'tag-sage'}" style="font-size:9.5px;">${b.days===0 ? 'Today' : 'Tomorrow'}</span>
        </div>
      `).join('')}
    </div>`}
  </div>`;
}

/* ============ COUPON ENTRY PAGE ============ */
function renderCoupons(){
  const f = state.couponForm;
  if(!f.code) f.code = generateCouponCode();
  return `
  <div class="page-head">
    <div>
      <span class="page-eyebrow">Marketing</span>
      <h1 class="page-title">Coupon Entry</h1>
      <p class="page-sub">Create coupons with auto-generated codes and set the prize value applied at billing.</p>
    </div>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <label>Add New Coupon</label>
    <div class="field-row">
      <div class="field" style="flex:2;">
        <label>Coupon Name / Title</label>
        <input id="cp-name" placeholder="e.g. Diwali Offer" value="${f.name}" oninput="state.couponForm.name=this.value;">
      </div>
      <div class="field" style="flex:1;">
        <label>Prize Type</label>
        <select onchange="state.couponForm.type=this.value; render();">
          <option value="flat" ${f.type==='flat'?'selected':''}>Flat ₹</option>
          <option value="percent" ${f.type==='percent'?'selected':''}>Percent %</option>
        </select>
      </div>
      <div class="field" style="flex:1;">
        <label>Coupon Prize (${f.type==='percent' ? '%' : '₹'})</label>
        <input type="number" min="0" id="cp-value" placeholder="e.g. ${f.type==='percent'?'10':'500'}" value="${f.value}" oninput="state.couponForm.value=this.value;">
      </div>
    </div>
    <div class="field-row">
      <div class="field" style="flex:1;">
        <label>Minimum Bill (₹) — optional</label>
        <input type="number" min="0" placeholder="0" value="${f.minBill}" oninput="state.couponForm.minBill=this.value;">
      </div>
      <div class="field" style="flex:1;">
        <label>Valid Till — optional</label>
        <input type="date" value="${f.expiry}" onchange="state.couponForm.expiry=this.value;">
      </div>
      <div class="field" style="flex:1.4;">
        <label>Coupon Number (auto generated)</label>
        <div style="display:flex; gap:6px;">
          <input class="mono" value="${f.code}" oninput="state.couponForm.code=this.value;">
          <button class="btn btn-ghost btn-sm" onclick="refreshCouponCode()">↻</button>
        </div>
      </div>
    </div>
    <button class="btn btn-gold" style="margin-top:10px;" onclick="saveCouponEntry()">+ Add Coupon</button>
  </div>

  <div class="card">
    <h3 class="card-title">All Coupons</h3>
    ${state.coupons.length===0 ? `<div class="empty-state">No coupons created yet.</div>` : `
    <table>
      <thead><tr><th>Coupon Number</th><th>Name</th><th>Prize</th><th>Min Bill</th><th>Valid Till</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${state.coupons.map(c=>`
          <tr>
            <td class="mono"><b>${c.code}</b></td>
            <td>${c.name}</td>
            <td class="mono">${c.type==='percent' ? c.value + '%' : money(c.value)}</td>
            <td class="mono">${c.minBill ? money(c.minBill) : '—'}</td>
            <td>${c.expiry || 'No expiry'}</td>
            <td><span class="tag ${c.active?'tag-sage':'tag-rose'}">${c.active?'Active':'Inactive'}</span></td>
            <td>
              <div style="display:flex; gap:4px; flex-wrap:wrap;">
                <button class="btn-sm btn-ghost" onclick="copyCouponCode('${c.code}')">Copy</button>
                <button class="btn-sm btn-ghost" onclick="toggleCouponActive('${c.id}')">${c.active?'Disable':'Enable'}</button>
                <button class="btn-sm btn-danger" onclick="deleteCoupon('${c.id}')">Delete</button>
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>`}
  </div>
  `;
}

function grandTotal(){
  const sub = cartSubtotal();
  const gst = cartGST();
  const memDisc = membershipDiscountAmount();
  const disc = discountAmount();
  const coup = couponAmount();
  const tip = Number(state.tip)||0;
  return Math.max(0, sub + gst - memDisc - disc - coup + tip);
}

function round2(n){ return Math.round((Number(n)||0)*100)/100; }

function syncPaymentWithTotal(){
  const total = round2(grandTotal());
  if(state.paymentSplits.length === 1) {
    state.paymentSplits[0].amount = total;
    state.paymentSplits[0].manual = false;
    return;
  }
  autoBalanceSplits();
}

/* Auto-calculates the remaining split rows so the payment always matches the
   bill total. Rows the user typed into are kept ("manual"), and the untouched
   rows absorb whatever is left. */
function autoBalanceSplits(changedIdx){
  const splits = state.paymentSplits;
  if(!splits.length) return;
  const total = round2(grandTotal());

  if(typeof changedIdx === 'number' && splits[changedIdx]) splits[changedIdx].manual = true;

  let targets = splits.map((p,i)=>i).filter(i => !splits[i].manual);
  if(targets.length === 0){
    targets = splits.map((p,i)=>i).filter(i => i !== changedIdx);
    if(targets.length === 0){ splits[0].amount = total; return; }
  }

  const fixedSum = splits.reduce((s,p,i)=> targets.indexOf(i) === -1 ? s + (Number(p.amount)||0) : s, 0);
  let remaining = round2(total - fixedSum);
  if(remaining < 0) remaining = 0;

  targets.forEach((i,pos)=>{ splits[i].amount = pos === 0 ? remaining : 0; });
}

function updateSplitAmount(idx, val){
  if(!state.paymentSplits[idx]) return;
  state.paymentSplits[idx].amount = Number(val) || 0;
  autoBalanceSplits(idx);
  render();
}

function updateSplitMethod(idx, method){
  if(!state.paymentSplits[idx]) return;
  state.paymentSplits[idx].method = method;
  autoBalanceSplits();
  render();
}

function resetSplitAmounts(){
  state.paymentSplits.forEach(p => { p.manual = false; p.amount = 0; });
  autoBalanceSplits();
  render();
}

function updateAmountReceived(val){
  state.amountReceived = Number(val) || 0;
  render();
}

/* Cash handed over by the customer minus the bill total = money to return. */
function balanceToReturn(){
  const received = Number(state.amountReceived) || 0;
  if(received <= 0) return 0;
  return round2(received - grandTotal());
}

function updateDiscountValue(val){
  state.discount.value = Number(val) || 0;
  syncPaymentWithTotal();
  render();
}

function updateTipValue(val){
  state.tip = Number(val) || 0;
  syncPaymentWithTotal();
  render();
}

function splitTotal(){
  return state.paymentSplits.reduce((s,p)=>s+(Number(p.amount)||0),0);
}

function addPaymentSplit(){
  state.paymentSplits.push({method:'UPI', amount:0, manual:false});
  autoBalanceSplits();
  render();
}

function removePaymentSplit(idx){
  state.paymentSplits.splice(idx,1);
  autoBalanceSplits();
  render();
}

/* ============ INVOICE ACTIONS ============ */
function openPreview(){
  if(!isCustomerInfoEntered()){ showToast('Please enter Customer Name or Mobile'); return; }
  if(state.cart.length===0){ showToast('Cart is empty'); return; }
  if(!validateStylistAssignment()){ return; }
  
  const total = grandTotal();
  const paid = splitTotal();
  if(Math.abs(paid-total) > 0.5){
    showToast('Payment split (' + money(paid) + ') does not match total (' + money(total) + ')');
    return;
  }
  state.showPreview = true;
  render();
}

function closePreview(){
  state.showPreview = false;
  render();
}

function viewBillDetails(billId) {
  const bill = state.bills.find(b => b.id === billId);
  if(bill) {
    state.previewBill = bill;
    render();
  }
}

function closeBillDetails() {
  state.previewBill = null;
  render();
}

function printBillDirectly(billId) {
  const bill = state.bills.find(b => b.id === billId);
  if(bill) {
    state.previewBill = bill;
    render();
    setTimeout(() => {
      window.print();
    }, 300);
  }
}

function finalizeBill(){
  if(!isCustomerInfoEntered()){ showToast('Please enter Customer Name or Mobile'); return; }
  if(state.cart.length===0){ showToast('Cart is empty'); return; }
  if(!validateStylistAssignment()){ return; }

  const total = grandTotal();
  const paid = splitTotal();
  if(Math.abs(paid-total) > 0.5){
    showToast('Payment split (' + money(paid) + ') does not match total (' + money(total) + ')');
    return;
  }

  // Final coupon validation immediately before saving the invoice.
  const couponResult = evaluateCoupon();
  if(state.coupon && couponResult.status !== 'valid'){
    state.couponMsg = { ok:false, text:couponResult.message };
    showToast(couponResult.message);
    render();
    return;
  }

  let customerId = state.selectedCustomer;

  if(!customerId && state.walkInDetails.name.trim()) {
    const existing = state.customers.find(c=> c.mobile && c.mobile === state.walkInDetails.mobile.trim());
    if(existing) {
      customerId = existing.id;
    } else {
      const newCust = {
        id: uid('C'),
        name: state.walkInDetails.name.trim(),
        mobile: state.walkInDetails.mobile.trim(),
        email:'', dob:'', gender:'Other', membershipId: null, points:0, preferredStylist:''
      };
      state.customers.push(newCust);
      customerId = newCust.id;
      showToast('Customer auto-added to Customers list!');
    }
  }

  // Background Data Logic: Products & Services with Seller Name
  const itemsWithSeller = state.cart.map(item => ({
    ...item,
    sellerName: item.sellerName || primaryStylist() || 'Store Staff'
  }));

  const billDate = new Date();
  const bill = {
    id: generateInvoiceId(billDate),
    date: billDate,
    customerId: customerId || null,
    stylist: primaryStylist(),
    items: JSON.parse(JSON.stringify(itemsWithSeller)),
    subtotal: cartSubtotal(),
    gst: cartGST(),
    membershipDiscount: membershipDiscountAmount(),
    discount: discountAmount() + couponAmount(),
    tip: Number(state.tip)||0,
    total,
    payments: JSON.parse(JSON.stringify(state.paymentSplits)),
    amountReceived: Number(state.amountReceived) || 0,
    balanceReturned: balanceToReturn() > 0 ? balanceToReturn() : 0,
    status: 'ACTIVE',
    isB2B: !!state.isB2BInvoice,
    partyGst: state.isB2BInvoice ? (state.b2bPartyGst || '').trim() : '',
    isIGST: !!(state.isB2BInvoice && state.isIGST)
  };

  const affectedProductIds = [];
  bill.items.forEach(it=>{
    if(it.type==='product'){
      const p = state.products.find(pp=>pp.id===it.refId);
      if(p){
        p.stock = Math.max(0, p.stock - it.qty);
        affectedProductIds.push(p.id);
        dbWrite(sb && sb.from('products').update({ stock: p.stock }).eq('id', p.id), 'Update stock after sale');
      }
    }
  });
  checkAndAlertNewLowStock(affectedProductIds);

  if(bill.customerId){
    const cust = state.customers.find(c=>c.id===bill.customerId);
    if(cust){
      // 1 point per ₹500 actually spent — calculated on the final (post-discount)
      // total, not the pre-discount price, so points reflect real spend.
      cust.points = (cust.points||0) + Math.floor(total/500);
      dbWrite(sb && sb.from('customers').update({ points: cust.points }).eq('id', cust.id), 'Update customer points');
    }
  }

  state.bills.unshift(bill);
  dbWrite(sb && sb.from('bills').insert(dbMap.billToRow(bill)), 'Save invoice');
  logActivity(bill.isB2B ? 'Created B2B Invoice' : 'Created Bill', `${bill.id} — ${money(bill.total)}${bill.customerId ? ' — ' + (state.customers.find(c=>c.id===bill.customerId)||{}).name : ''}`);

  // Redeem the coupon only after the invoice has been successfully created.
  if(state.coupon && couponResult.coupon){
    const redeemedCoupon = state.coupons.find(c => c.id === couponResult.coupon.id);
    if(redeemedCoupon){
      redeemedCoupon.usedCount = Number(redeemedCoupon.usedCount || 0) + 1;
      redeemedCoupon.usedAt = new Date().toISOString();
      redeemedCoupon.active = false;
      rememberCouponCode(redeemedCoupon.code);
      dbWrite(sb && sb.from('coupons').update({ used_count: redeemedCoupon.usedCount, used_at: redeemedCoupon.usedAt, active: false }).eq('id', redeemedCoupon.id), 'Update coupon usage');
    }
  }

  state.cart = [];
  state.discount = {type:'flat', value:0};
  state.membershipOverrideValue = null;
  state.coupon = '';
  state.tip = 0;
  state.stylist = '';
  state.paymentSplits = [{method:'Cash', amount: 0, manual:false}];
  state.amountReceived = 0;
  state.selectedCustomer = '';
  state.walkInDetails = { name: '', mobile: '' };
  state.catalogSearch = '';
  state.catalogFilter = 'All';
  state.showPreview = false;
  state.isB2BInvoice = (state.tab === 'b2b'); // stay in B2B mode if still on the B2B Invoice page
  state.b2bPartyGst = '';
  state.isIGST = false;
  // Open the just-saved invoice right away with its Print Receipt button
  // handy, instead of dropping back to an empty bill screen.
  state.previewBill = bill;
  showToast('Invoice ' + bill.id + ' generated successfully');
  render();
}

function cancelInvoice(billId) {
  const bill = state.bills.find(b=> b.id === billId);
  if(!bill) return;
  if(confirm(`Are you sure you want to cancel Invoice ${billId}?`)){
    bill.status = 'CANCELLED';
    bill.items.forEach(it => {
      if(it.type === 'product'){
        const p = state.products.find(pp=> pp.id === it.refId);
        if(p){
          p.stock += it.qty;
          dbWrite(sb && sb.from('products').update({ stock: p.stock }).eq('id', p.id), 'Restore stock after cancel');
        }
      }
    });
    dbWrite(sb && sb.from('bills').update({ status: 'CANCELLED' }).eq('id', billId), 'Cancel invoice');
    logActivity('Cancelled Invoice', `${billId} — ${money(bill.total)}`);
    showToast(`Invoice ${billId} has been cancelled!`);
    render();
  }
}

function printReceipt(){ window.print(); } // kept for compatibility; no longer wired to any button — printing is only available after Confirm & Save Invoice

function sharePaymentLink() {
  const mobile = state.selectedCustomer 
    ? (state.customers.find(c=>c.id===state.selectedCustomer)||{}).mobile 
    : state.walkInDetails.mobile;
    
  const amt = money(grandTotal());
  const link = `https://pay.tarosalon.com/pay?amt=${grandTotal()}&inv=${uid('PAY')}`;
  const text = encodeURIComponent(`Hello! Here is your payment link of ${amt} for TARO Signature Salon: ${link}`);
  
  if(mobile) {
    window.open(`https://wa.me/91${mobile}?text=${text}`, '_blank');
  } else {
    navigator.clipboard.writeText(`Payment Link for ${amt}: ${link}`);
    showToast('Payment link copied to clipboard!');
  }
}

/* ============ NAVIGATION ============ */
// 'User' (staff) role only ever sees these tabs — Admin sees everything in NAV.
const USER_ALLOWED_TABS = ['dashboard', 'billing', 'b2b', 'appointments'];

function isAdmin(){
  return state.auth.isAuthenticated && state.auth.user && state.auth.user.role === 'Admin';
}
function getVisibleNav(){
  if(isAdmin()) return NAV;
  return NAV.filter(n => USER_ALLOWED_TABS.includes(n.id));
}

// ---------- REAL LOGIN (Supabase Auth — used whenever sb is connected) ----------
async function loginWithEmail(email, password){
  if(!email || !password){ showToast('Enter email and password'); return; }
  state.loginBusy = true; render();
  const { data, error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
  if(error){
    state.loginBusy = false;
    showToast('Login failed: ' + error.message);
    render();
    return;
  }
  await loadSessionProfile(data.session);
  const ok = await dbLoadAll();
  if(!ok) console.warn('[DB] Falling back to local demo data — check Supabase connection.');
  logActivity('Login', `${state.auth.user.role} logged in`);
  state.loginBusy = false;
  render();
}

async function loadSessionProfile(session){
  if(!session || !session.user){ return; }
  const { data: profile, error } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
  if(error){
    console.error('[Auth] Could not load profile:', error);
  }
  const role = (profile && profile.role) || 'User';
  const name = (profile && profile.name) || session.user.email;
  state.auth = {
    isAuthenticated: true,
    user: { name, role, email: session.user.email, id: session.user.id }
  };
}

async function logout(){
  if(state.auth.user){
    logActivity('Logout', `${state.auth.user.role} logged out`);
  }
  if(sb){
    await sb.auth.signOut();
  }
  try{ localStorage.removeItem('taro_auth'); }catch(e){}
  state.auth = { isAuthenticated: false, user: null };
  state.tab = 'dashboard';
  render();
}

// On page load: if Supabase is connected, ask it for any existing session
// (supabase-js persists this itself) instead of our own localStorage flag.
// If Supabase isn't connected at all, fall back to the old local PIN system
// so the app is still usable during local-only testing — clearly marked
// as the weaker option.
async function restoreSession(){
  if(sb){
    const { data } = await sb.auth.getSession();
    if(data && data.session){
      await loadSessionProfile(data.session);
    }
    return;
  }
  try{
    const saved = localStorage.getItem('taro_auth');
    if(saved){
      const parsed = JSON.parse(saved);
      if(parsed && parsed.isAuthenticated && parsed.user){
        state.auth = parsed;
      }
    }
  }catch(e){}
}

// ---------- FALLBACK LOGIN (PIN-only, local-storage session — only used
// when Supabase isn't connected at all, e.g. testing without a DB) ----------
function loginWithPinFallback(role, pin){
  const expected = role === 'Admin' ? state.settings.adminPin : state.settings.staffPin;
  if((pin || '').trim() !== (expected || '').trim()){
    showToast('Incorrect PIN');
    return;
  }
  state.auth = {
    isAuthenticated: true,
    user: { name: role === 'Admin' ? 'Admin' : 'Staff User', role }
  };
  try{ localStorage.setItem('taro_auth', JSON.stringify(state.auth)); }catch(e){}
  state.loginScreenRole = null;
  logActivity('Login', `${role} logged in (local PIN mode)`);
  showToast(`Welcome, ${state.auth.user.name}! (local-only mode — not fully secure)`);
  render();
}

function renderLoginScreen(){
  const usingRealAuth = !!sb;

  // Dark aurora glass shell: near-black backdrop, drifting neon teal/violet/
  // pink glow blobs, a frosted glass card, and a neon gradient button.
  const shell = (innerHtml) => `
  <style>
    @keyframes loginBlobDrift1 { 0%{transform:translate(-8%,-10%) scale(1);} 50%{transform:translate(10%,10%) scale(1.2);} 100%{transform:translate(-8%,-10%) scale(1);} }
    @keyframes loginBlobDrift2 { 0%{transform:translate(10%,8%) scale(1);} 50%{transform:translate(-12%,-8%) scale(1.25);} 100%{transform:translate(10%,8%) scale(1);} }
    @keyframes loginBlobDrift3 { 0%{transform:translate(0,0) scale(1);} 50%{transform:translate(-10%,12%) scale(1.15);} 100%{transform:translate(0,0) scale(1);} }
    @keyframes loginTwinkle { 0%,100%{opacity:0.15; transform:scale(0.8);} 50%{opacity:0.9; transform:scale(1.3);} }
    @keyframes loginCardIn { from{opacity:0; transform:translateY(24px) scale(0.96);} to{opacity:1; transform:translateY(0) scale(1);} }
    @keyframes loginTitleShimmer { 0%{background-position:0% 50%;} 100%{background-position:200% 50%;} }
    @keyframes loginStagger { from{opacity:0; transform:translateY(10px);} to{opacity:1; transform:translateY(0);} }
    @keyframes loginBtnGlow { 0%,100%{box-shadow:0 0 18px rgba(140,80,255,0.35);} 50%{box-shadow:0 0 30px rgba(0,255,200,0.45);} }

    .login-shell {
      min-height:100vh; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; padding:20px; box-sizing:border-box;
      background:#05060a;
    }
    .login-blob { position:absolute; border-radius:50%; filter:blur(50px); pointer-events:none; }
    .login-blob-1 { width:340px; height:340px; top:-80px; left:-60px; background:radial-gradient(circle, rgba(0,255,200,0.35), transparent 70%); animation:loginBlobDrift1 15s ease-in-out infinite; }
    .login-blob-2 { width:360px; height:360px; bottom:-100px; right:-80px; background:radial-gradient(circle, rgba(140,80,255,0.4), transparent 70%); animation:loginBlobDrift2 19s ease-in-out infinite; }
    .login-blob-3 { width:260px; height:260px; top:40%; right:8%; background:radial-gradient(circle, rgba(255,60,140,0.3), transparent 70%); animation:loginBlobDrift3 17s ease-in-out infinite; }
    .login-particles { position:absolute; inset:0; pointer-events:none; }
    .login-dot { position:absolute; width:3px; height:3px; border-radius:50%; background:#9be8d8; animation:loginTwinkle ease-in-out infinite; }

    .login-card-wrap { position:relative; z-index:2; }
    .login-card {
      position:relative; z-index:1; max-width:340px; width:min(340px, calc(100vw - 40px));
      background:rgba(255,255,255,0.05); backdrop-filter:blur(22px); -webkit-backdrop-filter:blur(22px);
      border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:36px 26px; text-align:center;
      box-shadow:0 20px 60px rgba(0,0,0,0.6);
      animation:loginCardIn 0.6s cubic-bezier(.2,.8,.2,1) both;
    }
    .login-title {
      margin:0 0 4px; font-size:19px; font-weight:600; letter-spacing:0.3px;
      background:linear-gradient(90deg,#fff,#9be8d8,#c9b6ff,#fff);
      background-size:200% auto; -webkit-background-clip:text; background-clip:text; color:transparent;
      animation:loginTitleShimmer 5s linear infinite;
    }
    .login-stagger { animation:loginStagger 0.5s ease both; }
    .login-stagger:nth-of-type(1){ animation-delay:0.05s; }
    .login-stagger:nth-of-type(2){ animation-delay:0.15s; }
    .login-stagger:nth-of-type(3){ animation-delay:0.25s; }
    .login-stagger:nth-of-type(4){ animation-delay:0.35s; }
    .login-card .field label {
      display:block; font-size:10.5px; color:rgba(255,255,255,0.5); margin-bottom:6px; letter-spacing:0.5px; text-transform:uppercase;
    }
    .login-card input {
      width:100%; box-sizing:border-box; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14);
      border-radius:10px; padding:11px 14px; color:#fff; font-size:13px;
      transition:box-shadow 0.25s ease, border-color 0.25s ease;
    }
    .login-card input::placeholder { color:rgba(255,255,255,0.35); }
    .login-card input:focus {
      outline:none; border-color:#9be8d8 !important; box-shadow:0 0 0 3px rgba(0,255,200,0.15);
    }
    .login-neon-btn {
      background:linear-gradient(90deg, #00ffc8, #8c50ff) !important; color:#05060a !important; border:none !important;
      font-weight:700; letter-spacing:0.3px; animation:loginBtnGlow 2.4s ease-in-out infinite;
    }
    .login-ghost-btn {
      background:rgba(255,255,255,0.06) !important; color:rgba(255,255,255,0.75) !important; border:1px solid rgba(255,255,255,0.14) !important;
    }
  </style>
  <div class="login-shell">
    <div class="login-blob login-blob-1"></div>
    <div class="login-blob login-blob-2"></div>
    <div class="login-blob login-blob-3"></div>
    <div class="login-particles">
      ${Array.from({length:18}).map((_,i)=>{
        const top = (i*53.7)%100, left = (i*31.3+7)%100, dur = (3+ (i%5))+'s', delay = (i*0.35)+'s';
        return `<div class="login-dot" style="top:${top}%; left:${left}%; animation-duration:${dur}; animation-delay:${delay};"></div>`;
      }).join('')}
    </div>
    <div class="login-card-wrap">
      <div class="login-card">
        <img src="${TARO_LOGO_DATA_URI}" alt="TARO Signature Salon" style="width:130px; max-width:65%; height:auto; margin:0 auto 10px; display:block; position:relative; z-index:1;">
        <h2 class="login-title">TARO Signature Salon</h2>
        ${innerHtml}
      </div>
    </div>
  </div>`;

  if(!usingRealAuth){
    // Fallback PIN screen — only shown when Supabase isn't connected.
    const pickedRole = state.loginScreenRole;
    const inner = `
        <div class="login-stagger" style="font-size:11px; color:#ff9b9b; margin-bottom:20px;">⚠️ Not connected to database — running in local-only PIN mode (less secure)</div>
        ${!pickedRole ? `
          <div style="display:flex; flex-direction:column; gap:10px;">
            <button class="btn login-neon-btn login-stagger" style="padding:14px;" onclick="state.loginScreenRole='Admin'; render();">👑 Admin Login</button>
            <button class="btn login-ghost-btn login-stagger" style="padding:14px;" onclick="state.loginScreenRole='User'; render();">👤 Staff Login</button>
          </div>
        ` : `
          <div class="login-stagger" style="font-size:13px; color:rgba(255,255,255,0.6); margin-bottom:10px;">${pickedRole} PIN</div>
          <input class="login-stagger" type="password" inputmode="numeric" id="login-pin-input" placeholder="Enter PIN" 
            style="text-align:center; font-size:20px; letter-spacing:6px; margin-bottom:14px;"
            onkeydown="if(event.key==='Enter') loginWithPinFallback('${pickedRole}', this.value);"
            autofocus>
          <button class="btn login-neon-btn login-stagger" style="width:100%; margin-bottom:8px;" onclick="loginWithPinFallback('${pickedRole}', document.getElementById('login-pin-input').value)">Login</button>
          <button class="btn login-ghost-btn login-stagger" style="width:100%;" onclick="state.loginScreenRole=null; render();">Back</button>
        `}`;
    return shell(inner);
  }

  // Real login — Supabase Auth email/password.
  const inner = `
      <div class="login-stagger" style="font-size:10.5px; color:rgba(255,255,255,0.45); margin-bottom:22px; text-transform:uppercase; letter-spacing:2px;">Staff Login</div>
      <div class="field login-stagger" style="text-align:left; margin-bottom:14px;"><label>Email</label><input type="email" id="login-email-input" placeholder="you@example.com" autocomplete="username"></div>
      <div class="field login-stagger" style="text-align:left; margin-bottom:20px;"><label>Password</label><input type="password" id="login-password-input" placeholder="••••••••" autocomplete="current-password"
        onkeydown="if(event.key==='Enter') loginWithEmail(document.getElementById('login-email-input').value, this.value);"></div>
      <button class="btn login-neon-btn login-stagger" style="width:100%; margin-top:6px;" ${state.loginBusy ? 'disabled' : ''}
        onclick="loginWithEmail(document.getElementById('login-email-input').value, document.getElementById('login-password-input').value)">
        ${state.loginBusy ? 'Logging in…' : 'Login'}
      </button>`;
  return shell(inner);
}


const NAV = [
  {id:'dashboard', label:'Dashboard', icon:'◆'},
  {id:'billing', label:'New Bill', icon:'🧾'},
  {id:'b2b', label:'B2B Invoice', icon:'🏢'},
  {id:'appointments', label:'Appointments', icon:'📅'},
  {id:'customers', label:'Customers', icon:'👤'},
  {id:'users', label:'Users / Staff', icon:'👥'},
  {id:'services', label:'Services', icon:'✂️'},
  {id:'products', label:'Products', icon:'🧴'},
  {id:'inward', label:'Inward Materials', icon:'📦'},
  {id:'coupons', label:'Coupon Entry', icon:'🎟️'},
  {id:'reports', label:'Auditor Reports', icon:'📊'},
  {id:'discountReport', label:'Discount Report', icon:'💸'},
  {id:'activityLogs', label:'Activity Logs', icon:'📜'},
  {id:'settings', label:'Settings', icon:'⚙️'},
];

function renderMobileBottomNav() {
  return `
    <nav class="mobile-bottom-nav">
      ${getVisibleNav().map(item => `
        <button 
          class="mobile-nav-item ${state.tab === item.id ? 'active' : ''}" 
          onclick="setTab('${item.id}')"
        >
          <span class="nav-icon">${item.icon}</span>
          <span class="nav-label">${item.label}</span>
        </button>
      `).join('')}
    </nav>
  `;
}

function renderSidebar(){
  return `
  <div class="sidebar no-print">
    <div class="brand">
      <img class="brand-logo" src="logo.png" alt="TARO">
      <div class="brand-name">TARO</div>
      <div class="brand-sub">Signature Salon</div>
    </div>
    <nav>
      ${getVisibleNav().map(n=>`
        <button class="nav-btn ${state.tab===n.id?'active':''}" onclick="setTab('${n.id}')">
          <span class="nav-emoji">${n.icon}</span> ${n.label}
        </button>
      `).join('')}
    </nav>
    <div class="sidebar-foot">
      <div style="margin-bottom:6px; color:var(--gold-soft);">
        ${state.auth.user ? state.auth.user.name : 'Admin'}
        <span class="tag ${isAdmin() ? 'tag-gold' : 'tag-sage'}" style="margin-left:6px; font-size:9px;">${state.auth.user ? state.auth.user.role : ''}</span>
      </div>
      <button class="btn-sm btn-ghost" style="width:100%; margin-bottom:8px; background:rgba(255,255,255,0.08); color:var(--ivory); border-color:rgba(255,255,255,0.15);" onclick="logout()">Logout</button>
      Developed by Sethuram Ravikumar
    </div>
  </div>`;
}
// 'billing' (New Bill) and 'b2b' (B2B Invoice) are two separate, dedicated
// screens now — switching between them, or leaving either one without
// saving, always resets the draft so a B2B invoice can never get mixed
// up with a regular walk-in bill (or vice versa).
const BILLING_LIKE_TABS = ['billing', 'b2b'];
function toggleNav(){ state.navOpen = !state.navOpen; render(); }

function setTab(t){
  if(!isAdmin() && !USER_ALLOWED_TABS.includes(t)){
    showToast('Only Admin can access this section');
    return;
  }
  if(BILLING_LIKE_TABS.includes(state.tab) && t !== state.tab){
    resetBillingDraft();
  }
  if(window.innerWidth <= 768) state.navOpen = false; // slide the menu away after choosing a page on phones
  state.tab = t;
  // Which screen you land on decides B2B mode — not a checkbox anymore.
  state.isB2BInvoice = (t === 'b2b');
  render();
}

function resetBillingDraft(){
  state.cart = [];
  state.discount = {type:'flat', value:0};
  state.membershipOverrideValue = null;
  state.coupon = '';
  state.couponMsg = null;
  state.tip = 0;
  state.stylist = '';
  state.paymentSplits = [{method:'Cash', amount: 0, manual:false}];
  state.amountReceived = 0;
  state.selectedCustomer = '';
  state.walkInDetails = { name: '', mobile: '' };
  state.catalogSearch = '';
  state.catalogFilter = 'All';
  state.showPreview = false;
  state.b2bPartyGst = '';
  state.isIGST = false;
}

/* ============ STAFF PERFORMANCE DATA ============ */
function getStaffWorkSummary(){
  const summaryMap = new Map();

  state.users.forEach(user => {
    summaryMap.set(user.name, {
      name: user.name,
      role: user.role,
      bills: 0,
      totalSales: 0,
      productRevenue: 0,
      services: {},
      products: {}
    });
  });

  const activeBills = state.bills.filter(b => {
    if (b.status === 'CANCELLED') return false;
    return isDateInRange(b.date, state.staffDateFrom, state.staffDateTo);
  });

  activeBills.forEach(bill => {
    const staffTouchedThisBill = new Set();

    bill.items.forEach(item => {
      const staffName = (item.sellerName || bill.stylist || '').trim() || 'Unassigned';

      if(!summaryMap.has(staffName)) {
        summaryMap.set(staffName, {
          name: staffName,
          role: 'Stylist',
          bills: 0,
          totalSales: 0,
          productRevenue: 0,
          services: {},
          products: {}
        });
      }

      const entry = summaryMap.get(staffName);
      const qty = Number(item.qty) || 1;
      const lineRevenue = (Number(item.price) || 0) * qty;

      if(item.type === 'service') {
        entry.totalSales += lineRevenue;
        entry.services[item.name || 'Service'] = (entry.services[item.name || 'Service'] || 0) + qty;
      } else if(item.type === 'product') {
        entry.productRevenue += lineRevenue;
        entry.products[item.name || 'Product'] = (entry.products[item.name || 'Product'] || 0) + qty;
      }

      staffTouchedThisBill.add(staffName);
    });

    staffTouchedThisBill.forEach(staffName => {
      summaryMap.get(staffName).bills += 1;
    });
  });

  let result = Array.from(summaryMap.values());

  if (state.staffSearch.trim()) {
    const query = state.staffSearch.trim().toLowerCase();
    result = result.filter(e => 
      e.name.toLowerCase().includes(query) || 
      e.role.toLowerCase().includes(query)
    );
  }

  return result
    .map(entry => ({
      ...entry,
      serviceEntries: Object.entries(entry.services).sort((a, b) => {
        const aIndex = state.services.findIndex(s => s.name === a[0]);
        const bIndex = state.services.findIndex(s => s.name === b[0]);
        return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
      }),
      productEntries: Object.entries(entry.products).sort((a, b) => {
        const aIndex = state.products.findIndex(p => p.name === a[0]);
        const bIndex = state.products.findIndex(p => p.name === b[0]);
        return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
      })
    }))
    .sort((a, b) => b.totalSales - a.totalSales);
}

function resetStaffFilters() {
  // "Reset" here means back to Today (search cleared too) — matches the
  // rest of the dashboard's "today by default" behaviour. Use the All Time
  // button in the UI to see every date instead.
  state.staffSearch = '';
  state.staffDateFrom = todayKey();
  state.staffDateTo = todayKey();
  state.staffLastKnownDay = todayKey();
  render();
}

function staffFiltersAllTime() {
  state.staffDateFrom = '';
  state.staffDateTo = '';
  render();
}

function exportStaffSummaryCSV() {
  const data = getStaffWorkSummary();
  let csv = 'Staff Name,Role,Invoices Count,Service Revenue\n';
  data.forEach(d => {
    csv += `"${d.name}","${d.role}",${d.bills},${d.totalSales}\n`;
  });
  downloadCSV('Staff_Work_Summary.csv', csv);
}

/* ============ PRODUCT SALES & SELLER REPORT ============ */
function getProductSalesSummary(){
  const summaryMap = new Map();

  const activeBills = state.bills.filter(b => {
    if (b.status === 'CANCELLED') return false;
    return isDateInRange(b.date, state.productDateFrom, state.productDateTo);
  });

  activeBills.forEach(bill => {
    (bill.items || []).forEach(item => {
      if(item.type !== 'product') return;
      const key = item.name;
      if(!summaryMap.has(key)){
        const prodRecord = state.products.find(p => p.name === item.name);
        summaryMap.set(key, {
          name: item.name,
          category: prodRecord ? prodRecord.category : '—',
          qty: 0,
          revenue: 0,
          sellers: {}
        });
      }
      const entry = summaryMap.get(key);
      const qty = Number(item.qty) || 1;
      entry.qty += qty;
      entry.revenue += (Number(item.price) || 0) * qty;
      const seller = item.sellerName || bill.stylist || 'Store Desk';
      entry.sellers[seller] = (entry.sellers[seller] || 0) + qty;
    });
  });

  let result = Array.from(summaryMap.values());

  if (state.productSearch.trim()) {
    const query = state.productSearch.trim().toLowerCase();
    result = result.filter(e =>
      e.name.toLowerCase().includes(query) ||
      e.category.toLowerCase().includes(query)
    );
  }

  return result
    .map(entry => ({
      ...entry,
      sellerEntries: Object.entries(entry.sellers).sort((a,b) => b[1]-a[1])
    }))
    .sort((a, b) => b.revenue - a.revenue);
}

function resetProductFilters() {
  state.productSearch = '';
  state.productDateFrom = '';
  state.productDateTo = '';
  render();
}

function exportProductSummaryCSV() {
  const data = getProductSalesSummary();
  let csv = 'Product,Category,Qty Sold,Revenue,Sold By\n';
  data.forEach(d => {
    const sellers = d.sellerEntries.map(([name,count]) => `${name} (${count})`).join('; ');
    csv += `"${d.name}","${d.category}",${d.qty},${d.revenue},"${sellers}"\n`;
  });
  downloadCSV('Product_Sales_Report.csv', csv);
}

/* ============ RENDER DASHBOARD ============ */
function getDashboardStatsSummary(){
  const activeBills = state.bills.filter(b=> b.status !== 'CANCELLED');

  const statsBills = activeBills.filter(b=> isDateInRange(b.date, state.dashboardDateFrom, state.dashboardDateTo));

  let totalSalesNoGST = 0;
  let totalGST = 0;
  let totalProductSales = 0;
  let totalProductsSoldQty = 0;
  let totalDiscountGiven = 0;
  let grossSales = 0;

  statsBills.forEach(b => {
    const billDiscount = (Number(b.membershipDiscount) || 0) + (Number(b.discount) || 0);
    totalDiscountGiven += billDiscount;
    totalGST += Number(b.gst || 0);
    // Gross Sales must tie out to what was actually collected (bill.total —
    // subtotal + GST - discounts - coupon + tip), not the pre-discount
    // subtotal. Otherwise a discount looked like it was ADDING to sales
    // instead of reducing it, which threw off audit files and cash close.
    grossSales += Number(b.total || 0);

    (b.items || []).forEach(item => {
      if(item.type === 'product') {
        totalProductSales += (Number(item.price) * Number(item.qty));
        totalProductsSoldQty += Number(item.qty);
      }
    });
  });
  // Back out the GST portion from the actual collected total, so
  // Sales(w/o GST) + GST always exactly equals Gross Sales.
  totalSalesNoGST = grossSales - totalGST;

  const PAY_METHODS = ['Cash','UPI','Card Payment','Payment Link','Bank Transfer','Gift Voucher'];
  const paymentBreakdown = {};
  PAY_METHODS.forEach(m => paymentBreakdown[m] = { amount: 0, count: 0 });
  let splitBillsCount = 0, splitBillsAmount = 0, totalReceived = 0, totalBalanceReturned = 0;

  statsBills.forEach(b => {
    const pays = (b.payments || []).filter(p => Number(p.amount) > 0);
    pays.forEach(p => {
      const key = paymentBreakdown[p.method] ? p.method : 'Cash';
      paymentBreakdown[key].amount += Number(p.amount) || 0;
      paymentBreakdown[key].count += 1;
    });
    if(pays.length > 1){
      splitBillsCount += 1;
      splitBillsAmount += pays.reduce((s,p)=> s + (Number(p.amount)||0), 0);
    }
    totalReceived += Number(b.amountReceived || b.total || 0);
    totalBalanceReturned += Number(b.balanceReturned || 0);
  });

  return {
    statsBills,
    paymentMethods: PAY_METHODS,
    paymentBreakdown,
    splitBillsCount,
    splitBillsAmount,
    totalReceived,
    totalBalanceReturned,
    totalSalesNoGST,
    totalGST,
    totalProductSales,
    totalProductsSoldQty,
    totalDiscountGiven,
    grossSales,
    totalInvoices: statsBills.length
  };
}

function exportDashboardSummaryCSV(){
  const s = getDashboardStatsSummary();
  let csv = 'Metric,Value\n';
  csv += `Gross Sales,${s.grossSales.toFixed(2)}\n`;
  csv += `Sales (w/o GST),${s.totalSalesNoGST.toFixed(2)}\n`;
  csv += `Total GST,${s.totalGST.toFixed(2)}\n`;
  csv += `Total Discount Given,${s.totalDiscountGiven.toFixed(2)}\n`;
  csv += `Product Sales,${s.totalProductSales.toFixed(2)}\n`;
  csv += `Products Sold (Pcs),${s.totalProductsSoldQty}\n`;
  csv += `Total Invoices,${s.totalInvoices}\n`;
  csv += '\nPayment Method,Amount Received,Transactions\n';
  s.paymentMethods.forEach(m => {
    csv += `${m},${s.paymentBreakdown[m].amount.toFixed(2)},${s.paymentBreakdown[m].count}\n`;
  });
  csv += `Split Payment Bills,${s.splitBillsAmount.toFixed(2)},${s.splitBillsCount}\n`;
  csv += `Total Amount Received,${s.totalReceived.toFixed(2)},\n`;
  csv += `Balance Returned to Customers,${s.totalBalanceReturned.toFixed(2)},\n`;
  const rangeLabel = (state.dashboardDateFrom || state.dashboardDateTo)
    ? `${state.dashboardDateFrom || 'start'}_to_${state.dashboardDateTo || 'today'}`
    : 'all_time';
  downloadCSV(`Dashboard_Summary_${rangeLabel}.csv`, csv);
}

function ensureDashboardDateFreshness(){
  const nowKey = todayKey();
  if(state.dashboardLastKnownDay !== nowKey){
    // A new day has started. Only auto-roll the filter forward if the user
    // was sitting on the default "today" view (not a range they picked on
    // purpose) — so old data never lingers on-screen after midnight, but a
    // deliberate historical lookup is left alone.
    const wasOnDefaultToday = state.dashboardDateFrom === state.dashboardLastKnownDay
      && state.dashboardDateTo === state.dashboardLastKnownDay;
    if(wasOnDefaultToday){
      state.dashboardDateFrom = nowKey;
      state.dashboardDateTo = nowKey;
    }
    state.dashboardLastKnownDay = nowKey;
  }
  if(state.staffLastKnownDay !== nowKey){
    const staffWasOnDefaultToday = state.staffDateFrom === state.staffLastKnownDay
      && state.staffDateTo === state.staffLastKnownDay;
    if(staffWasOnDefaultToday){
      state.staffDateFrom = nowKey;
      state.staffDateTo = nowKey;
    }
    state.staffLastKnownDay = nowKey;
  }
}

// Resets EVERY dashboard filter (stat boxes + Staff Working Data & Product
// Sales) back to Today in one tap.
function resetDashboardFiltersToToday(){
  const t = todayKey();
  state.dashboardDateFrom = t; state.dashboardDateTo = t; state.dashboardLastKnownDay = t;
  state.staffDateFrom = t; state.staffDateTo = t; state.staffLastKnownDay = t;
  render();
}

function getDashboardHeroStats(){
  const activeBills = state.bills.filter(b=> b.status !== 'CANCELLED');
  const todayKeyStr = todayKey();
  const yd = new Date(); yd.setDate(yd.getDate()-1);
  const yesterdayKeyStr = yd.toISOString().slice(0,10);

  function billsOnDate(dateKey){
    return activeBills.filter(b => (new Date(b.date)).toISOString().slice(0,10) === dateKey);
  }
  const todaysBills = billsOnDate(todayKeyStr);
  const yestBills = billsOnDate(yesterdayKeyStr);

  const todaySales = todaysBills.reduce((s,b)=>s+Number(b.total||0),0);
  const yestSales = yestBills.reduce((s,b)=>s+Number(b.total||0),0);

  function productSalesOf(bills){
    return bills.reduce((s,b)=> s + (b.items||[]).filter(i=>i.type==='product').reduce((s2,i)=>s2+Number(i.price)*Number(i.qty),0), 0);
  }
  const todayProductSales = productSalesOf(todaysBills);
  const yestProductSales = productSalesOf(yestBills);

  const todayAppointments = state.appointments.filter(a=>a.date===todayKeyStr && a.status!=='Cancelled').length;
  const yestAppointments = state.appointments.filter(a=>a.date===yesterdayKeyStr && a.status!=='Cancelled').length;

  // "New" customer = their first-ever active bill falls on that date.
  function firstBillDateForCustomer(custId){
    const dates = activeBills.filter(b=>b.customerId===custId).map(b=> new Date(b.date).toISOString().slice(0,10)).sort();
    return dates[0];
  }
  const todayCustomerIds = Array.from(new Set(todaysBills.map(b=>b.customerId).filter(Boolean)));
  const newCustomersToday = todayCustomerIds.filter(cid => firstBillDateForCustomer(cid) === todayKeyStr).length;
  const yestCustomerIds = Array.from(new Set(yestBills.map(b=>b.customerId).filter(Boolean)));
  const newCustomersYesterday = yestCustomerIds.filter(cid => firstBillDateForCustomer(cid) === yesterdayKeyStr).length;

  function pctChange(t, y){
    if(y === 0) return t > 0 ? 100 : 0;
    return round2(((t - y) / y) * 100);
  }

  const last7 = [];
  for(let i=6;i>=0;i--){
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = d.toISOString().slice(0,10);
    last7.push({ key, label: d.toLocaleDateString('en-IN',{day:'2-digit',month:'short'}), total: billsOnDate(key).reduce((s,b)=>s+Number(b.total||0),0) });
  }

  return {
    todaySales, todaySalesChange: pctChange(todaySales, yestSales),
    todayProductSales, productSalesChange: pctChange(todayProductSales, yestProductSales),
    todayAppointments, appointmentsChange: pctChange(todayAppointments, yestAppointments),
    newCustomersToday, newCustomersChange: pctChange(newCustomersToday, newCustomersYesterday),
    last7
  };
}

function renderDashboardHeroSection(){
  const h = getDashboardHeroStats();
  const maxBar = Math.max(1, ...h.last7.map(d=>d.total));
  const statusColor = { Pending:'tag-alert', Confirmed:'tag-gold', Completed:'tag-sage', Cancelled:'tag-rose' };
  const todaysAppts = getTodayAppointments();
  const allPendingAppts = getAllPendingAppointments();

  function deltaBadge(pct){
    const up = pct >= 0;
    return `<span style="color:${up?'var(--sage)':'var(--alert)'}; font-weight:600;">${up?'↑':'↓'} ${Math.abs(round2(pct))}%</span> <span style="color:var(--text-dim);">vs yesterday</span>`;
  }

  return `
  <div class="grid grid-4" style="margin-bottom:16px;">
    <div class="card" style="display:flex; gap:14px; align-items:flex-start;">
      <div style="width:44px; height:44px; border-radius:50%; background:var(--gold-soft); display:flex; align-items:center; justify-content:center; font-size:19px; flex-shrink:0;">🧾</div>
      <div>
        <div class="stat-label">Today's Sales</div>
        <div class="stat-value">${money(h.todaySales)}</div>
        <div class="stat-delta">${deltaBadge(h.todaySalesChange)}</div>
      </div>
    </div>
    <div class="card" style="display:flex; gap:14px; align-items:flex-start;">
      <div style="width:44px; height:44px; border-radius:50%; background:var(--gold-soft); display:flex; align-items:center; justify-content:center; font-size:19px; flex-shrink:0;">📅</div>
      <div>
        <div class="stat-label">Total Appointments</div>
        <div class="stat-value">${h.todayAppointments}</div>
        <div class="stat-delta">${deltaBadge(h.appointmentsChange)}</div>
      </div>
    </div>
    <div class="card" style="display:flex; gap:14px; align-items:flex-start;">
      <div style="width:44px; height:44px; border-radius:50%; background:var(--gold-soft); display:flex; align-items:center; justify-content:center; font-size:19px; flex-shrink:0;">👥</div>
      <div>
        <div class="stat-label">New Customers</div>
        <div class="stat-value">${h.newCustomersToday}</div>
        <div class="stat-delta">${deltaBadge(h.newCustomersChange)}</div>
      </div>
    </div>
    <div class="card" style="display:flex; gap:14px; align-items:flex-start;">
      <div style="width:44px; height:44px; border-radius:50%; background:var(--gold-soft); display:flex; align-items:center; justify-content:center; font-size:19px; flex-shrink:0;">🧴</div>
      <div>
        <div class="stat-label">Product Sales</div>
        <div class="stat-value">${money(h.todayProductSales)}</div>
        <div class="stat-delta">${deltaBadge(h.productSalesChange)}</div>
      </div>
    </div>
  </div>

  <div class="grid grid-2" style="margin-bottom:18px; align-items:stretch;">
    <div class="card">
      <h3 class="card-title">Sales Overview <span style="font-weight:400; font-size:12px; color:var(--text-dim);">Last 7 Days</span></h3>
      <div style="display:flex; align-items:flex-end; gap:10px; height:150px; padding-top:10px;">
        ${h.last7.map(d => `
          <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%;">
            <div title="${money(d.total)}" style="width:100%; max-width:34px; height:${Math.max(4, Math.round((d.total/maxBar)*120))}px; background:${d.key===todayKey() ? 'var(--ink)' : 'var(--gold-soft)'}; border-radius:5px 5px 0 0;"></div>
            <div style="font-size:10.5px; color:var(--text-dim); margin-top:6px; white-space:nowrap;">${d.label}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <h3 class="card-title" style="margin:0;">Today's Appointments</h3>
        <button class="btn-sm btn-ghost" onclick="setTab('appointments')">View All</button>
      </div>
      ${todaysAppts.length === 0 ? `<div class="empty-state" style="padding:20px 10px;">No appointments today.</div>` : `
        <div style="display:flex; flex-direction:column; gap:8px; max-height:180px; overflow-y:auto;">
          ${todaysAppts.slice(0,6).map(a => `
            <div style="display:flex; align-items:center; gap:10px; font-size:12.5px; padding-bottom:8px; border-bottom:1px solid var(--line);">
              <span class="mono" style="width:70px; flex-shrink:0; color:var(--text-dim);">${formatApptTime(a.time)}</span>
              <span style="flex:1;">${a.serviceName || 'Appointment'} — <b>${a.customerName}</b></span>
              <span class="tag ${statusColor[a.status]||''}">${a.status}</span>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  </div>

  <div class="card" style="margin-bottom:18px; border:2px dashed var(--alert); background:#fff8f7;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:${allPendingAppts.length?'10px':'0'};">
      <h3 class="card-title" style="margin:0; color:var(--alert);">⏳ Pending Appointments <span style="font-weight:400; font-size:12px; color:var(--text-dim);">(all dates)</span></h3>
      <button class="btn-sm btn-ghost" onclick="setTab('appointments')">View All</button>
    </div>
    ${allPendingAppts.length === 0 ? `<div style="font-size:12.5px; color:var(--text-dim);">No pending appointments right now.</div>` : `
      <div style="display:flex; flex-direction:column; gap:8px; max-height:180px; overflow-y:auto;">
        ${allPendingAppts.slice(0,6).map(a => `
          <div style="display:flex; align-items:center; gap:10px; font-size:12.5px; padding-bottom:8px; border-bottom:1px solid var(--line);">
            <span class="mono" style="width:95px; flex-shrink:0; color:var(--text-dim);">${new Date(a.date).toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} ${formatApptTime(a.time)}</span>
            <span style="flex:1;">${a.serviceName || 'Appointment'} — <b>${a.customerName}</b></span>
            <button class="btn-sm btn-gold" onclick="updateAppointmentStatus('${a.id}','Confirmed')">Confirm</button>
          </div>
        `).join('')}
      </div>
      ${allPendingAppts.length > 6 ? `<div style="font-size:11px; color:var(--text-dim); margin-top:6px;">+${allPendingAppts.length - 6} more — <a href="javascript:void(0)" onclick="setTab('appointments')" style="color:var(--gold);">view all</a></div>` : ''}
    `}
  </div>

  <div class="card" style="margin-bottom:18px;">
    <h3 class="card-title">Quick Actions</h3>
    <div class="grid grid-4">
      <button class="btn btn-ghost" style="padding:14px;" onclick="setTab('billing')">🧾 New Bill</button>
      <button class="btn btn-ghost" style="padding:14px;" onclick="openModal('customer')">👤 Add Customer</button>
      <button class="btn btn-ghost" style="padding:14px;" onclick="openModal('appointment')">📅 Book Appointment</button>
      <button class="btn btn-ghost" style="padding:14px;" onclick="openModal('product')">🧴 Add Product</button>
    </div>
  </div>
  `;
}

function renderDashboard(){
  ensureDashboardDateFreshness();
  const today = new Date().toDateString();
  const activeBills = state.bills.filter(b=> b.status !== 'CANCELLED');
  const todaysBills = activeBills.filter(b=> new Date(b.date).toDateString()===today);

  const dashStats = getDashboardStatsSummary();
  const statsBills = dashStats.statsBills;
  const totalSalesNoGST = dashStats.totalSalesNoGST;
  const totalGST = dashStats.totalGST;
  const totalProductSales = dashStats.totalProductSales;
  const totalProductsSoldQty = dashStats.totalProductsSoldQty;
  const totalDiscountGiven = dashStats.totalDiscountGiven;

  const staffWorkSummary = getStaffWorkSummary();

  // Small top-right corner badge naming tomorrow's birthday person(s), so it's
  // visible at a glance without opening the full Birthday Notifications panel.
  const tomorrowBirthdays = getBirthdayNotificationItems().filter(item => item.days === 1);
  const tomorrowBirthdayBadge = tomorrowBirthdays.length > 0 ? `
    <div class="tag tag-gold" style="font-size:11.5px; padding:6px 10px; white-space:nowrap;" title="Birthday tomorrow">
      🎂 Tomorrow: ${tomorrowBirthdays.map(b=>b.name).join(', ')}
    </div>` : '';

  return `
  <div class="page-head" style="position:relative;">
    <div style="position:absolute; top:0; right:0;">${tomorrowBirthdayBadge}</div>
    <div>
      <span class="page-eyebrow">Today · ${new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</span>
      <h1 class="page-title">Dashboard</h1>
      <p class="page-sub">Snapshot of sales, bookings and stock across the floor.</p>
    </div>
    <div style="display:flex; align-items:center; gap:12px; margin-left:auto;">
    </div>
  </div>

  ${renderDashboardHeroSection()}

  <div class="grid" style="grid-template-columns:minmax(0,1.7fr) 320px; align-items:start;">
    <div>
      <!-- STAT BOX DATE FILTER -->
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px; background:var(--ivory); padding:10px; border-radius:8px; align-items:center;">
        <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
          <span>From:</span>
          <input type="date" style="width:130px;" value="${state.dashboardDateFrom}" onchange="state.dashboardDateFrom=this.value; render();">
        </div>
        <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
          <span>To:</span>
          <input type="date" style="width:130px;" value="${state.dashboardDateTo}" onchange="state.dashboardDateTo=this.value; render();">
        </div>
        <button class="btn-sm btn-ghost" onclick="state.dashboardDateFrom=todayKey(); state.dashboardDateTo=todayKey(); state.dashboardLastKnownDay=todayKey(); render();">Today</button>
        <button class="btn-sm btn-ghost" onclick="state.dashboardDateFrom=''; state.dashboardDateTo=''; render();">All Time</button>
        <button class="btn-sm btn-gold" style="margin-left:auto;" onclick="exportDashboardSummaryCSV()">Export CSV</button>
        <span style="font-size:11.5px; color:var(--text-dim); width:100%;">Shows today's data by default — old data is hidden until you pick a date range or tap "All Time".</span>
      </div>

      <!-- RESET ALL DASHBOARD FILTERS (Summary + Staff/Product section) -->
      <div style="display:flex; justify-content:flex-end; margin-bottom:10px;">
        <button class="btn-sm btn-ghost" title="Resets Dashboard Summary and Staff Working Data & Product Sales filters back to Today" onclick="resetDashboardFiltersToToday()">↺ Reset All Filters to Today</button>
      </div>

      <!-- STAT CARDS (TOP CARDS) -->
      <div class="card" style="margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
          <h3 class="card-title" style="margin:0;">Dashboard Summary</h3>
          <button class="btn-sm btn-ghost" onclick="state.dashboardStatsCollapsed = !state.dashboardStatsCollapsed; render();">
            ${state.dashboardStatsCollapsed ? '➕ Expand' : '➖ Minimize'}
          </button>
        </div>
        ${!state.dashboardStatsCollapsed ? `
        <div class="grid grid-3">
          <div class="card">
            <div class="stat-label">Gross Sales</div>
            <div class="stat-value">${money(dashStats.grossSales)}</div>
            <div class="stat-delta">Actual amount billed (after discounts)</div>
          </div>

          <div class="card">
            <div class="stat-label">Sales (w/o GST)</div>
            <div class="stat-value">${money(totalSalesNoGST)}</div>
            <div class="stat-delta">Before tax, after discounts</div>
          </div>

          <div class="card">
            <div class="stat-label">Total GST</div>
            <div class="stat-value gold">${money(totalGST)}</div>
            <div class="stat-delta">Tax collected</div>
          </div>

          <div class="card">
            <div class="stat-label">Total Discount Given</div>
            <div class="stat-value rose">${money(totalDiscountGiven)}</div>
            <div class="stat-delta">Membership + manual + coupon discounts</div>
          </div>

          <div class="card">
            <div class="stat-label">Product Sales</div>
            <div class="stat-value rose">${money(totalProductSales)}</div>
            <div class="stat-delta">Revenue from products</div>
          </div>

          <div class="card">
            <div class="stat-label">Products Sold</div>
            <div class="stat-value sage">${totalProductsSoldQty} <span style="font-size:14px; color:var(--text-dim);">Pcs</span></div>
            <div class="stat-delta">Total units sold</div>
          </div>

          <div class="card">
            <div class="stat-label">Total Invoices</div>
            <div class="stat-value">${statsBills.length}</div>
            <div class="stat-delta">Active sales</div>
          </div>
        </div>
        ` : ''}
      </div>

      <!-- PAYMENT MODE COLLECTION BOXES -->
      <div class="card" style="margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
          <h3 class="card-title" style="margin:0;">Payment Collection by Mode</h3>
          <div style="display:flex; align-items:center; gap:8px;">
            <button class="btn-sm btn-gold" onclick="exportDashboardSummaryCSV()">Export CSV</button>
            <button class="btn-sm btn-ghost" onclick="state.paymentModeCollapsed = !state.paymentModeCollapsed; render();">
              ${state.paymentModeCollapsed ? '➕ Expand' : '➖ Minimize'}
            </button>
          </div>
        </div>
        ${!state.paymentModeCollapsed ? `
        <div style="display:flex; flex-wrap:wrap; gap:12px;">
          ${dashStats.paymentMethods.filter(m => m !== 'Payment Link' && m !== 'Bank Transfer').map(m => `
            <div class="card" style="background:var(--ivory); flex:1 1 150px; min-width:150px; box-sizing:border-box;">
              <div class="stat-label">${({"Cash": "💵", "UPI": "📱", "Card Payment": "💳", "Gift Voucher": "🎁"})[m] || ''} ${m}</div>
              <div class="stat-value">${money(dashStats.paymentBreakdown[m].amount)}</div>
              <div class="stat-delta">${dashStats.paymentBreakdown[m].count} transaction(s)</div>
            </div>
          `).join('')}
        </div>
        <div style="font-size:11.5px; color:var(--text-dim); margin-top:8px;">Follows the same date filter as the boxes above.</div>
        ` : ''}
      </div>

      <!-- STAFF WORKING DATA + PRODUCT SALES SECTION -->
      <div class="card" style="margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h3 class="card-title" style="margin:0;">Staff Working Data & Product Sales</h3>
          <button class="btn-sm btn-ghost" onclick="state.staffSectionCollapsed = !state.staffSectionCollapsed; render();">
            ${state.staffSectionCollapsed ? '➕ Expand' : '➖ Minimize'}
          </button>
        </div>

        ${!state.staffSectionCollapsed ? `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:14px; background:var(--ivory); padding:10px; border-radius:8px; align-items:center;">
          <input type="text" id="staff-search-input" placeholder="Search staff name or role..." style="max-width:200px;" value="${state.staffSearch}" oninput="state.staffSearch=this.value; render();">
          <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
            <span>From:</span>
            <input type="date" style="width:130px;" value="${state.staffDateFrom}" onchange="state.staffDateFrom=this.value; render();">
          </div>
          <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
            <span>To:</span>
            <input type="date" style="width:130px;" value="${state.staffDateTo}" onchange="state.staffDateTo=this.value; render();">
          </div>
          <button class="btn-sm btn-ghost" onclick="resetStaffFilters()">Today</button>
          <button class="btn-sm btn-ghost" onclick="staffFiltersAllTime()">All Time</button>
          <button class="btn-sm btn-gold" style="margin-left:auto;" onclick="exportStaffSummaryCSV()">Export CSV</button>
          <span style="font-size:11.5px; color:var(--text-dim); width:100%;">Shows today's data by default — old data is hidden until you pick a date range or tap "All Time".</span>
        </div>

        ${staffWorkSummary.length===0 ? `<div class="empty-state">No staff activity found for selected filters.</div>` : `
        <table>
          <thead><tr><th>Staff</th><th>Role</th><th>Invoices</th><th>Services Done</th><th>Products</th><th>Service Revenue</th><th>Product Revenue</th></tr></thead>
          <tbody>
            ${staffWorkSummary.map(entry=>{
              const safeEntry = entry || {};
              const serviceEntries = Array.isArray(safeEntry.serviceEntries) ? safeEntry.serviceEntries : [];
              const productEntries = Array.isArray(safeEntry.productEntries) ? safeEntry.productEntries : [];
              const totalServices = serviceEntries.reduce((sum, [, count]) => sum + (Number(count) || 0), 0);
              const totalProducts = productEntries.reduce((sum, [, count]) => sum + (Number(count) || 0), 0);
              const serviceBreakdown = serviceEntries.length > 0
                ? serviceEntries.map(([name, count]) => `<span class="service-pill">${name || 'Service'} × ${count || 0}</span>`).join('')
                : '<span class="tag tag-rose">No services</span>';
              const productBreakdown = productEntries.length > 0
                ? productEntries.map(([name, count]) => `<span class="service-pill">${name || 'Product'} × ${count || 0}</span>`).join('')
                : '<span class="tag tag-rose">No products</span>';

              return `<tr>
                <td><b>${safeEntry.name || 'Unknown staff'}</b></td>
                <td><span class="tag tag-gold">${safeEntry.role || 'Staff'}</span></td>
                <td>${safeEntry.bills || 0}</td>
                <td><div class="service-breakdown">${serviceBreakdown}</div></td>
                <td><div class="service-breakdown">${productBreakdown}</div></td>
                <td class="mono">${money(Number(safeEntry.totalSales) || 0)}</td>
                <td class="mono">${money(Number(safeEntry.productRevenue) || 0)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>`}
        ` : ''}
      </div>

      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:6px;">
          <h3 class="card-title" style="margin:0;">Recent Invoices</h3>
          <button class="btn-sm btn-ghost" onclick="state.recentInvoicesCollapsed = !state.recentInvoicesCollapsed; render();">
            ${state.recentInvoicesCollapsed ? '➕ Expand' : '➖ Minimize'}
          </button>
        </div>
        ${!state.recentInvoicesCollapsed ? (state.bills.length===0 ? `<div class="empty-state">No bills generated yet.</div>` : `
        <table>
          <thead><tr><th>Invoice</th><th>Customer</th><th>Stylist</th><th>Items</th><th>Total</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${state.bills.slice(0,8).map(b=>{
              const cust = state.customers.find(c=>c.id===b.customerId);
              const isCancelled = b.status === 'CANCELLED';
              return `<tr>
                <td class="mono">${b.id}</td>
                <td>${cust? cust.name : 'Walk-in'}</td>
                <td><b>${b.stylist || 'N/A'}</b></td>
                <td>${b.items.length}</td>
                <td class="mono">${money(b.total)}</td>
                <td><span class="tag ${isCancelled?'tag-rose':'tag-sage'}">${b.status || 'ACTIVE'}</span></td>
                <td>
                  <div style="display:flex; gap:4px;">
                    <button class="btn-sm btn-ghost" onclick="viewBillDetails('${b.id}')">Preview</button>
                    <button class="btn-sm btn-ghost" onclick="printBillDirectly('${b.id}')">Print</button>
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>`) : ''}
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:16px;">
      ${renderBirthdayPanel()}
      <div class="card" style="padding:12px;">
        <h3 class="card-title" style="margin:0 0 8px; font-size:13px;">Today’s Snapshot</h3>
        <div style="font-size:12px; color:var(--text-dim); line-height:1.6;">
          <div><b>Invoices today:</b> ${todaysBills.length}</div>
          <div><b>Cash sales:</b> ${money(todaysBills.reduce((sum,b)=>sum + (Number(b.total)||0),0))}</div>
          <div><b>Active staff:</b> ${state.users.filter(u=>u.status==='Active').length}</div>
        </div>
      </div>
    </div>
  </div>
  `;
}

/* ============ RENDER BILLING ============ */
function renderBilling(){
  const cats = groupBy(state.services, 'category');
  const sub = cartSubtotal(), gst = cartGST(), memDisc = membershipDiscountAmount(), disc = discountAmount(), coup = couponAmount(), total = grandTotal();
  // % shown on the receipt should reflect the rate applied to the DISCOUNTED
  // (net taxable) value, not the full pre-discount subtotal — otherwise a
  // genuine 18% item shows as some lower/odd % once a discount is applied.
  const netTaxableValue = Math.max(0, sub - memDisc - disc - coup);
  const effectiveGstRatePercent = netTaxableValue > 0 ? (gst / netTaxableValue) * 100 : 0;
  const gstSplitPercent = round2(effectiveGstRatePercent / 2);
  const cgst = gst / 2;
  const sgst = gst / 2;
  const paid = splitTotal();
  const balanced = Math.abs(paid-total) <= 0.5;
  const balanceReturn = balanceToReturn();
  const search = (state.catalogSearch||'').trim().toLowerCase();
  const catFilter = state.catalogFilter || 'All';

  const isCustomerReady = isCustomerInfoEntered();
  const selectedCustObj = state.customers.find(c => c.id === state.selectedCustomer);
  const activeMemPlan = getCustomerMembershipObject(selectedCustObj);
  const activeMemDisc = getActiveMembershipDiscount(); // { type, value }

  const upiSplit = state.paymentSplits.find(p => p.method === 'UPI' || p.method === 'Payment Link');
  const upiAmount = upiSplit ? Number(upiSplit.amount) : total;
  const upiString = `upi://pay?pa=${encodeURIComponent(state.bankDetails.upiId)}&pn=${encodeURIComponent(state.settings.salonName)}&am=${upiAmount}&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(upiString)}`;

  function matchesSearch(item){
    if(!search) return true;
    return item.name.toLowerCase().includes(search) || (item.code||item.sku||'').toLowerCase().includes(search);
  }
  const catalogEntries = getVisibleCatalogEntries();
  const highlightIdx = Math.min(state.catalogHighlightIndex||0, Math.max(0, catalogEntries.length-1));

  return `
  <div class="page-head">
    <div>
      <span class="page-eyebrow">${state.isB2BInvoice ? 'B2B Billing' : 'Billing'}</span>
      <h1 class="page-title">${state.isB2BInvoice ? '🏢 B2B Invoice' : 'New Bill'}</h1>
      <p class="page-sub">${state.isB2BInvoice ? 'Business/GST customer invoice — includes Party GSTIN and HSN/SAC codes.' : 'Add services/products, customer info, instant payment links & QR code.'}</p>
    </div>
  </div>

  <div class="grid grid-2">
    <div class="card">
      <label>Step 1 — Customer Identification</label>
      
      <div style="background:#f9f9f9; padding:12px; border-radius:8px; margin-bottom:14px; border:1px solid #e2e8f0;">
        <div class="field-row" style="margin-bottom:8px;">
          <div class="field" style="flex:1; position:relative;">
            <label>CUSTOMER NAME</label>
            <input type="text" id="customer-name-input" placeholder="Enter Name..." value="${state.walkInDetails.name}" 
              oninput="handleCustomerNameInput(this.value)"
              onfocus="handleCustomerNameInput(this.value)"
              onblur="setTimeout(hideCustomerSuggestions, 150)"
              onkeydown="if(event.key==='Enter') handleCustomerSearch();"
              autocomplete="off">
            <div id="customer-name-suggestions" style="display:none; position:absolute; top:100%; left:0; right:0; background:#fff; border:1px solid var(--line); border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,0.1); z-index:20; max-height:180px; overflow-y:auto;"></div>
          </div>
          <div class="field" style="flex:1;">
            <label>PHONE NUMBER</label>
            <input type="text" placeholder="Enter Mobile..." value="${state.walkInDetails.mobile}" 
              oninput="state.walkInDetails.mobile=this.value;"
              onkeydown="if(event.key==='Enter') handleCustomerSearch();">
          </div>
        </div>

        <div style="display:flex; gap:8px; justify-content:flex-end; align-items:center;">
          ${selectedCustObj ? `
            <span class="tag ${activeMemPlan ? 'tag-gold' : 'tag-sage'}" style="margin-right:auto;">
              ${activeMemPlan ? '👑 ' + activeMemPlan.name + ' Member' : '✓ Existing Customer'}
            </span>
            <span class="tag" style="background:#eef2f7; color:#334155;" title="Loyalty points earned so far">⭐ ${selectedCustObj.points || 0} pts</span>
            ${!activeMemPlan ? `<button class="btn btn-ghost btn-sm" onclick="openModal('customer','${selectedCustObj.id}')">+ Add Membership</button>` : ''}
          ` : ''}
          <button class="btn btn-gold btn-sm" onclick="handleCustomerSearch()">Search Customer</button>
          <button class="btn btn-ghost btn-sm" onclick="resetCustomerSearch()">Reset</button>
        </div>

        <div style="margin-top:10px; padding-top:10px; border-top:1px dashed #e2e8f0;">
          ${state.isB2BInvoice ? `
          <div style="font-size:12px; color:#8b6508; font-weight:bold; margin-bottom:8px;">🏢 B2B Tax Invoice — GSTIN required for the party</div>
          <div class="field">
            <label>Party GST Number</label>
            <input id="b2b-gst-number" placeholder="e.g. 33ABCDE1234F1Z5" value="${state.b2bPartyGst || (selectedCustObj ? (selectedCustObj.gstNumber||'') : '')}" oninput="state.b2bPartyGst=this.value;">
          </div>
          <label style="display:flex; align-items:center; gap:8px; font-size:12.5px; cursor:pointer; margin-top:8px;">
            <input type="checkbox" id="igst-toggle" ${state.isIGST ? 'checked' : ''} onchange="state.isIGST=this.checked; render();">
            Inter-state sale — customer wants an <b>IGST</b> invoice (instead of CGST+SGST)
          </label>
          ` : `
          <div style="font-size:11.5px; color:var(--text-dim);">Need to bill a business customer with their GSTIN? Use <a href="javascript:void(0)" onclick="setTab('b2b')" style="color:var(--gold); font-weight:bold;">B2B Invoice</a> from the sidebar instead.</div>
          `}
        </div>
      </div>
<!-- STEP 2 CONTAINER -->
      <div style="opacity: ${isCustomerReady ? '1' : '0.55'}; pointer-events: ${isCustomerReady ? 'auto' : 'none'}; transition: opacity 0.2s ease;">
        <div style="display:flex; gap:6px; margin-bottom:10px;">
          <input type="text" id="catalog-search-input" placeholder="Search service or product..." value="${state.catalogSearch||''}"
            oninput="state.catalogSearch=this.value; state.catalogHighlightIndex=0; render();"
            onkeydown="handleCatalogSearchKeydown(event)" style="flex:1;">
          <button class="btn btn-ghost" onclick="state.catalogSearch=''; state.catalogHighlightIndex=0; render();">Reset</button>
        </div>

        ${!search ? `
        <div class="empty-state" style="padding:16px; text-align:center; font-size:12.5px;">
          Search a service or product name above, then click it (or press ↓ then Enter) to add it to the bill.
        </div>` : `
        <div class="catalog-list">
          ${(catFilter !== 'Products') ? Object.entries(cats)
            .filter(([cat]) => catFilter === 'All' || catFilter === cat)
            .map(([cat, items]) => {
              const filtered = items.filter(matchesSearch);
              if (filtered.length === 0) return '';
              return `
                <div class="cat-group">
                  <h4>${cat}</h4>
                  ${filtered.map(s => {
                    const idx = catalogEntries.findIndex(e => e.type==='service' && e.id===s.id);
                    const isHighlighted = idx === highlightIdx;
                    return `
                    <div class="cat-item" style="cursor:pointer; ${isHighlighted ? 'background:#fdf6e3; border-radius:6px;' : ''}" onclick="quickAddCatalogItem('service','${s.id}')">
                      <div>
                        <div class="cat-item-name">${s.name}</div>
                        <div class="cat-item-meta">${s.code} · ${s.duration} min · GST ${s.gst}%</div>
                      </div>
                      <div style="display:flex;align-items:center;">
                        <span class="cat-item-price mono">${money(s.price)}</span>
                      </div>
                    </div>
                  `;}).join('')}
                </div>
              `;
            }).join('') : ''}

          ${(catFilter === 'All' || catFilter === 'Products') ? `
          <div class="cat-group">
            <h4>Products</h4>
            ${state.products.filter(matchesSearch).map(p => {
              const idx = catalogEntries.findIndex(e => e.type==='product' && e.id===p.id);
              const isHighlighted = idx === highlightIdx;
              return `
              <div class="cat-item" style="cursor:${p.stock<=0?'not-allowed':'pointer'}; opacity:${p.stock<=0?'0.5':'1'}; ${isHighlighted ? 'background:#fdf6e3; border-radius:6px;' : ''}" onclick="${p.stock<=0?'':`quickAddCatalogItem('product','${p.id}')`}">
                <div>
                  <div class="cat-item-name">${p.name}</div>
                  <div class="cat-item-meta">${p.brand} · Stock ${p.stock}</div>
                </div>
                <div style="display:flex;align-items:center;">
                  <span class="cat-item-price mono">${money(p.price)}</span>
                </div>
              </div>
            `;}).join('')}
          </div>` : ''}

          ${state.services.filter(matchesSearch).length === 0 && state.products.filter(matchesSearch).length === 0 ? `<div class="empty-state" style="padding:14px; font-size:12.5px;">No service or product matches “${state.catalogSearch}”.</div>` : ''}
        </div>`}
      </div>
    </div>

    <div>
      <div class="receipt-wrap">
        <div class="receipt">
          <div class="receipt-head">
            <img class="seal-img" src="logo.png" alt="TARO">
            <div class="receipt-salon">${state.settings.salonName}</div>
            <div class="receipt-tag">Tax Invoice</div>
          </div>

          ${state.cart.length===0 ? `<div class="empty-cart">Your cart is empty. Tap "+" to add services or products.</div>` : `
            ${state.cart.map(l=>`
              <div class="receipt-line">
                <span class="name">${l.name}${l.qty>1?` × ${l.qty}`:''}${l.isMemberPrice ? ' <span class="tag tag-gold" style="font-size:9px;">Member Price</span>' : ''}
                  <button class="remove-x" onclick="removeFromCart('${l.lineId}')">×</button>
                  ${l.type==='product'? `
                    <button class="btn-sm btn-ghost" onclick="changeQty('${l.lineId}',-1)">−</button>
                    <input type="number" min="1" id="qty-${l.lineId}" value="${l.qty}" onchange="setQty('${l.lineId}', this.value)"
                      style="width:52px; padding:2px 4px; text-align:center; font-size:12px; display:inline-block;">
                    <button class="btn-sm btn-ghost" onclick="changeQty('${l.lineId}',1)">+</button>
                  ` : ''}
                </span>
                <span class="amt">${money(l.price*l.qty)}</span>
              </div>
            `).join('')}

            ${memDisc>0?`<div class="receipt-total-row" style="color:var(--gold);"><span>Membership Discount (${activeMemDisc.type==='flat' ? money(activeMemDisc.value) : activeMemDisc.value+'%'})</span><span class="mono">−${money(memDisc)}</span></div>`:''}
            ${disc>0?`<div class="receipt-total-row" style="color:var(--sage);"><span>Discount</span><span class="mono">−${money(disc)}</span></div>`:''}
            ${coup>0?`<div class="receipt-total-row" style="color:var(--sage);"><span>Coupon</span><span class="mono">−${money(coup)}</span></div>`:''}
            <div class="receipt-total-row"><span>Subtotal</span><span class="mono">${money(netTaxableValue)}</span></div>
            ${(state.isB2BInvoice && state.isIGST) ? `
            <div class="receipt-total-row"><span>IGST (${round2(effectiveGstRatePercent)}%)</span><span class="mono">${money(gst)}</span></div>
            ` : `
            <div class="receipt-total-row"><span>CGST (${gstSplitPercent}%)</span><span class="mono">${money(cgst)}</span></div>
            <div class="receipt-total-row"><span>SGST (${gstSplitPercent}%)</span><span class="mono">${money(sgst)}</span></div>
            `}
            ${Number(state.tip)>0?`<div class="receipt-total-row"><span>Tip</span><span class="mono">${money(Number(state.tip))}</span></div>`:''}
            <div class="receipt-total-row grand"><span>Total</span><span>${money(total)}</span></div>
          `}
        </div>
      </div>

      ${state.cart.length>0 ? `
      <div class="card no-print" style="margin-top:14px;">

        ${state.cart.filter(l=>l.type==='service').length > 0 ? `
        <div style="margin-bottom:14px; background:var(--ivory); padding:10px; border-radius:8px;">
          <label>Who did each service?</label>
          ${state.cart.filter(l=>l.type==='service').map(l => `
            <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
              <span style="flex:1; font-size:13px;">${l.name}</span>
              <select style="width:180px;" onchange="updateCartLineSeller('${l.lineId}', this.value)">
                <option value="" ${!l.sellerName?'selected':''}>-- Select Staff --</option>
                ${state.users.map(u=>`<option value="${u.name}" ${l.sellerName===u.name?'selected':''}>${u.name}</option>`).join('')}
              </select>
            </div>
          `).join('')}
        </div>
        ` : ''}

        ${state.cart.filter(l=>l.type==='product').length > 0 ? `
        <div style="margin-bottom:14px; background:var(--ivory); padding:10px; border-radius:8px;">
          <label>Who sold each product?</label>
          ${state.cart.filter(l=>l.type==='product').map(l => `
            <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
              <span style="flex:1; font-size:13px;">${l.name}</span>
              <div style="display:flex; align-items:center; gap:4px;">
                <span style="font-size:11.5px; color:var(--text-dim);">Qty</span>
                <input type="number" min="1" id="pqty-${l.lineId}" value="${l.qty}" onchange="setQty('${l.lineId}', this.value)" style="width:60px; text-align:center;">
              </div>
              <select style="width:180px;" onchange="updateCartLineSeller('${l.lineId}', this.value)">
                <option value="" ${!l.sellerName?'selected':''}>-- Assign Stylist --</option>
                ${state.users.map(u=>`<option value="${u.name}" ${l.sellerName===u.name?'selected':''}>${u.name}</option>`).join('')}
                <option value="Store Desk" ${l.sellerName==='Store Desk'?'selected':''}>Store Desk</option>
              </select>
            </div>
          `).join('')}
        </div>
        ` : ''}

        <label>Step 3 — Discount & Membership</label>
        
        <div style="background:#fffdf0; border:1px solid #ffe58f; padding:10px; border-radius:6px; margin-bottom:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:12px; font-weight:bold; color:#8c6b00;">👑 Membership Discount ${activeMemPlan ? `(${activeMemPlan.name})` : ''}</span>
            ${activeMemPlan ? `
              <button class="btn-sm btn-ghost" onclick="state.membershipOverrideValue = ${activeMemPlan.discountValue}; syncPaymentWithTotal(); render();">Reset (${formatPlanDiscount(activeMemPlan)})</button>
            ` : ''}
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:13px; color:#8c6b00; font-weight:bold; width:20px; text-align:center;">${activeMemDisc.type==='flat' ? '₹' : '%'}</span>
            <input type="number" min="0" style="width:100px;" value="${activeMemDisc.value}" 
              onchange="state.membershipOverrideValue = Number(this.value); syncPaymentWithTotal(); render();">
            <span style="font-size:12px; color:#666;">${activeMemDisc.type==='flat' ? 'Off (Edit manual amount for this bill)' : '% Off (Edit manual rate for this bill)'}</span>
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Extra Discount</label>
            <div style="display:flex;gap:6px;">
              <select style="flex:0 0 78px;" onchange="state.discount.type=this.value; syncPaymentWithTotal(); render();">
                <option value="flat" ${state.discount.type==='flat'?'selected':''}>₹</option>
                <option value="percent" ${state.discount.type==='percent'?'selected':''}>%</option>
              </select>
              <input type="number" min="0" value="${state.discount.value}" onchange="updateDiscountValue(this.value)">
            </div>
          </div>
          <div class="field">
            <label>Coupon Code</label>
            <div style="display:flex; gap:6px;">
              <input type="text" id="bill-coupon-input" placeholder="Enter coupon code" value="${state.coupon}"
                oninput="state.coupon=this.value;"
                onkeydown="if(event.key==='Enter') applyCouponCode(this.value);">
              <button class="btn btn-gold btn-sm" onclick="applyCouponCode(document.getElementById('bill-coupon-input').value)">Apply</button>
              ${state.coupon ? `<button class="btn btn-ghost btn-sm" onclick="clearCouponCode()">×</button>` : ''}
            </div>
            ${state.couponMsg ? `<div style="font-size:11px; margin-top:4px; color:${state.couponMsg.ok ? 'var(--sage)' : '#c0392b'};">${state.couponMsg.ok ? '✓ ' : '✕ '}${state.couponMsg.text}</div>` : ''}
          </div>
        </div>

        <label style="margin-top:10px;">Step 4 — Payment Options</label>
        <div style="font-size:11.5px; color:var(--text-dim); margin-bottom:8px;">
          Type any one amount — the remaining payment mode is calculated automatically.
        </div>
        ${state.paymentSplits.map((p,idx)=>`
          <div class="payment-row" style="display:flex; gap:8px; margin-bottom:8px; align-items:center;">
            <select style="flex:1;" onchange="updateSplitMethod(${idx}, this.value)">
              ${['Cash','UPI','Card Payment','Payment Link','Bank Transfer','Gift Voucher'].map(m=>`<option ${p.method===m?'selected':''}>${m}</option>`).join('')}
            </select>
            <input type="number" style="flex:1;" min="0" value="${round2(p.amount)}" onchange="updateSplitAmount(${idx}, this.value)">
            <span style="font-size:10px; color:var(--text-dim); min-width:38px;">${p.manual? 'manual' : 'auto'}</span>
            ${state.paymentSplits.length>1? `<button class="remove-x" onclick="removePaymentSplit(${idx})">×</button>` : ''}
          </div>
        `).join('')}
        
        <div style="display:flex; gap:8px; margin-top:6px;">
          <button class="btn btn-ghost btn-sm" onclick="addPaymentSplit()">+ Split Payment</button>
          <button class="btn btn-ghost btn-sm" onclick="resetSplitAmounts()">Reset Split</button>
        </div>

        <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:13px;font-weight:600;color:${balanced?'var(--sage)':'var(--alert)'};">
          <span>Paid: ${money(paid)}</span><span>${balanced? 'Balanced ✓' : 'Remaining: ' + money(round2(total - paid))}</span>
        </div>

        <div style="margin-top:14px; background:var(--ivory); padding:10px; border-radius:8px;">
          <div class="field" style="margin:0;">
            <label>Amount Received from Customer (₹)</label>
            <input type="number" min="0" placeholder="e.g. 4000" value="${state.amountReceived ? state.amountReceived : ''}" onchange="updateAmountReceived(this.value)">
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:12.5px;">
            <span>Bill Total</span><span class="mono">${money(total)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:4px; font-size:13px; font-weight:700; color:${balanceReturn < 0 ? 'var(--alert)' : 'var(--sage)'};">
            <span>${balanceReturn < 0 ? 'Balance Still Due' : 'Balance to Return'}</span>
            <span class="mono">${money(Math.abs(balanceReturn))}</span>
          </div>
        </div>

        <div style="display:flex;gap:10px;margin-top:14px;">
          <button class="btn btn-gold" style="flex:1;" onclick="openPreview()">Preview Invoice</button>
        </div>
      </div>
      ` : ''}
    </div>
  </div>
  `;
}

/* ============ CUSTOMERS MANAGEMENT ============ */
function renderCustomers(){
  return `
  <div class="page-head">
    <div><h1 class="page-title">Customers</h1></div>
    <button class="btn btn-gold" onclick="openModal('customer')">+ Add Customer</button>
  </div>
  <div class="card">
    <table>
      <thead><tr><th>Name</th><th>Mobile</th><th>Party GST No.</th><th>Membership Tier</th><th>Points</th><th>Action</th></tr></thead>
      <tbody>
        ${state.customers.map(c=>{
          const plan = getCustomerMembershipObject(c);
          return `
          <tr>
            <td><b>${c.name}</b></td>
            <td class="mono">${c.mobile}</td>
            <td class="mono">${c.gstNumber || '—'}</td>
            <td><span class="tag ${plan ? 'tag-gold' : ''}">${plan ? plan.name + ' (' + formatPlanDiscount(plan) + ')' : 'None'}</span></td>
            <td>${c.points}</td>
            <td>
              <button class="btn-sm btn-ghost" onclick="openModal('customer', '${c.id}')">Edit</button>
              <button class="btn-sm btn-danger" onclick="deleteCustomer('${c.id}')">Delete</button>
            </td>
          </tr>
        `;}).join('')}
      </tbody>
    </table>
  </div>
  `;
}

function deleteCustomer(id) {
  if(confirm('Are you sure you want to delete this customer?')) {
    const cust = state.customers.find(c => c.id === id);
    state.customers = state.customers.filter(c => c.id !== id);
    dbWrite(sb && sb.from('customers').delete().eq('id', id), 'Delete customer');
    logActivity('Deleted Customer', cust ? `${cust.name} (${cust.mobile})` : id);
    showToast('Customer deleted');
    render();
  }
}

function getFilteredUsers(){
  const q = (state.usersSearch||'').trim().toLowerCase();
  if(!q) return state.users;
  return state.users.filter(u =>
    (u.name||'').toLowerCase().includes(q) ||
    (u.role||'').toLowerCase().includes(q) ||
    (u.mobile||'').toLowerCase().includes(q) ||
    (u.id||'').toLowerCase().includes(q)
  );
}

function exportUsersCSV(){
  let csv = 'ID,Name,Role,Mobile,DOB,DOJ,Status\n';
  getFilteredUsers().forEach(u => {
    csv += `${u.id},"${u.name}",${u.role},${u.mobile||''},${u.dob||''},${u.doj||''},${u.status}\n`;
  });
  downloadCSV('Staff_List.csv', csv);
}

/* ============ USERS MANAGEMENT ============ */
function renderUsers(){
  const users = getFilteredUsers();
  return `
  <div class="page-head">
    <div>
      <span class="page-eyebrow">Staff Management</span>
      <h1 class="page-title">Users & Staff</h1>
      <p class="page-sub">Manage stylists, receptionists, and system access.</p>
    </div>
    <button class="btn btn-gold" onclick="openModal('user')">+ Add User</button>
  </div>
  <div class="card">
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:12px; background:var(--ivory); padding:10px; border-radius:8px;">
      <input type="text" id="users-search-input" placeholder="Search staff name, role or mobile..." style="max-width:260px;" value="${state.usersSearch||''}" oninput="state.usersSearch=this.value; render();">
      <button class="btn-sm btn-ghost" onclick="state.usersSearch=''; render();">Reset</button>
      <span style="font-size:12px; color:var(--text-dim);">${users.length} of ${state.users.length} staff</span>
      <button class="btn-sm btn-gold" style="margin-left:auto;" onclick="exportUsersCSV()">Export CSV</button>
    </div>
    <table>
      <thead>
        <tr><th>ID</th><th>Name</th><th>Role</th><th>Mobile</th><th>DOB</th><th>DOJ</th><th>Status</th><th>Action</th></tr>
      </thead>
      <tbody>
        ${users.map(u => `
          <tr>
            <td class="mono">${u.id}</td>
            <td><b>${u.name}</b></td>
            <td><span class="tag tag-gold">${u.role}</span></td>
            <td class="mono">${u.mobile}</td>
            <td class="mono">${u.dob || '—'}</td>
            <td class="mono">${u.doj || '—'}</td>
            <td><span class="tag ${u.status==='Active'?'tag-sage':'tag-rose'}">${u.status}</span></td>
            <td>
              <button class="btn-sm btn-ghost" onclick="openModal('user', '${u.id}')">Edit</button>
              <button class="btn-sm btn-danger" onclick="deleteUser('${u.id}')">Delete</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  `;
}

function deleteUser(id) {
  if(confirm('Are you sure you want to delete this user?')) {
    const usr = state.users.find(u => u.id === id);
    state.users = state.users.filter(u => u.id !== id);
    dbWrite(sb && sb.from('users').delete().eq('id', id), 'Delete staff member');
    logActivity('Deleted Staff User', usr ? usr.name : id);
    showToast('User removed');
    render();
  }
}

function getFilteredServices(){
  const q = (state.servicesSearch||'').trim().toLowerCase();
  if(!q) return state.services;
  return state.services.filter(s =>
    (s.name||'').toLowerCase().includes(q) ||
    (s.code||'').toLowerCase().includes(q) ||
    (s.category||'').toLowerCase().includes(q)
  );
}

function exportServicesCSV(){
  let csv = 'Code,Name,Category,Duration (min),Price,Membership Price,GST %,HSN Code,SAC Code\n';
  getFilteredServices().forEach(s => {
    csv += `${s.code},"${s.name}",${s.category},${s.duration||''},${s.price},${s.membershipPrice!==undefined&&s.membershipPrice!==null?s.membershipPrice:''},${s.gst},${s.hsnCode||''},${s.sacCode||''}\n`;
  });
  downloadCSV('Services_List.csv', csv);
}

/* ============ SERVICES MANAGEMENT ============ */
function renderServices(){
  const services = getFilteredServices();
  return `
  <div class="page-head">
    <div><h1 class="page-title">Services & Rates</h1></div>
    <button class="btn btn-gold" onclick="openModal('service')">+ Add Service</button>
  </div>
  <div class="card">
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:12px; background:var(--ivory); padding:10px; border-radius:8px;">
      <input type="text" id="services-search-input" placeholder="Search service name, code or category..." style="max-width:260px;" value="${state.servicesSearch||''}" oninput="state.servicesSearch=this.value; render();">
      <button class="btn-sm btn-ghost" onclick="state.servicesSearch=''; render();">Reset</button>
      <span style="font-size:12px; color:var(--text-dim);">${services.length} of ${state.services.length} services</span>
      <button class="btn-sm btn-gold" style="margin-left:auto;" onclick="exportServicesCSV()">Export CSV</button>
    </div>
    <table>
      <thead><tr><th>Code</th><th>Name</th><th>Category</th><th>Price (₹)</th><th>Membership Price (₹)</th><th>GST (%)</th><th>HSN Code</th><th>SAC Code</th><th>Action</th></tr></thead>
      <tbody>
        ${services.map(s=>`
          <tr>
            <td class="mono">${s.code}</td>
            <td><b>${s.name}</b></td>
            <td>${s.category}</td>
            <td class="mono">${money(s.price)}</td>
            <td class="mono">${(s.membershipPrice !== undefined && s.membershipPrice !== null && s.membershipPrice !== '') ? money(s.membershipPrice) : '<span style="color:var(--text-dim);">— not set —</span>'}</td>
            <td>${s.gst}%</td>
            <td class="mono">${s.hsnCode || '<span style="color:var(--text-dim);">—</span>'}</td>
            <td class="mono">${s.sacCode || '<span style="color:var(--text-dim);">—</span>'}</td>
            <td>
              <button class="btn-sm btn-gold" onclick="openModal('service', '${s.id}')">Edit Rate & GST</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  `;
}

function getFilteredInventoryProducts(){
  const q = (state.productsSearch||'').trim().toLowerCase();
  if(!q) return state.products;
  return state.products.filter(p =>
    (p.name||'').toLowerCase().includes(q) ||
    (p.sku||'').toLowerCase().includes(q) ||
    (p.brand||'').toLowerCase().includes(q) ||
    (p.category||'').toLowerCase().includes(q)
  );
}

function exportProductsCSV(){
  let csv = 'SKU,Name,Brand,Category,Price,GST %,Stock,Min Stock\n';
  getFilteredInventoryProducts().forEach(p => {
    csv += `${p.sku||''},"${p.name}",${p.brand||''},${p.category||''},${p.price},${p.gst!==undefined?p.gst:18},${p.stock},${p.minStock||''}\n`;
  });
  downloadCSV('Products_Inventory.csv', csv);
}

/* ============ PRODUCTS MANAGEMENT ============ */
function renderProducts(){
  const lowStock = getLowStockProducts();
  const products = getFilteredInventoryProducts();
  return `
  <div class="page-head">
    <div><h1 class="page-title">Products Inventory</h1></div>
    <button class="btn btn-gold" onclick="openModal('product')">+ Add Product</button>
  </div>
  ${lowStock.length > 0 ? `
  <div class="card" style="margin-bottom:14px; border:1px solid #eecac6; background:#fdf3f1; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
    <div style="font-size:13px;"><b style="color:var(--alert);">${lowStock.length} product(s) low on stock</b> — ${lowStock.map(p=>p.name).join(', ')}</div>
    <button class="btn-sm btn-gold" onclick="sendLowStockEmailAlert()">📧 Send Email Alert</button>
  </div>
  ` : ''}
  <div class="card">
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:12px; background:var(--ivory); padding:10px; border-radius:8px;">
      <input type="text" id="products-search-input" placeholder="Search product, SKU or brand..." style="max-width:260px;" value="${state.productsSearch||''}" oninput="state.productsSearch=this.value; render();">
      <button class="btn-sm btn-ghost" onclick="state.productsSearch=''; render();">Reset</button>
      <span style="font-size:12px; color:var(--text-dim);">${products.length} of ${state.products.length} products</span>
      <button class="btn-sm btn-gold" style="margin-left:auto;" onclick="exportProductsCSV()">Export CSV</button>
    </div>
    <table>
      <thead><tr><th>SKU / Name</th><th>Brand</th><th>Price</th><th>GST (%)</th><th>Stock</th><th>Low Stock Alert Level</th><th>Action</th></tr></thead>
      <tbody>
        ${products.map(p=>`
          <tr>
            <td><b>${p.name}</b><br><span class="mono" style="font-size:11px;color:#777;">${p.sku}</span></td>
            <td>${p.brand}</td>
            <td class="mono">${money(p.price)}</td>
            <td class="mono">${p.gst !== undefined ? p.gst : 18}%</td>
            <td class="${p.stock<=p.minStock?'low-stock':''}">${p.stock}${p.stock<=p.minStock?' ⚠︎':''}</td>
            <td>
              <input type="number" min="0" value="${p.minStock !== undefined ? p.minStock : 5}" style="width:65px; padding:4px; text-align:center; border:1px solid #ccc; border-radius:4px;" onchange="updateProductMinStock('${p.id}', this.value)">
            </td>
            <td>
              <button class="btn-sm btn-ghost" onclick="openModal('product', '${p.id}')">Edit</button>
              <button class="btn-sm btn-danger" onclick="deleteProduct('${p.id}')">Remove</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>

  <div class="card" style="margin-top:16px; border:2px dashed #7a9b76; background:#f8faf7;">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
      <h3 style="margin:0; color:#4b6b47;">📥 Stock Movement Report</h3>
      <button class="btn-sm btn-gold" onclick="exportStockMovementCSV()">Download Report CSV</button>
    </div>
    <p style="font-size:12px; color:#666; margin-bottom:10px;">
      Every time products are added via Inward Materials, this logs Old Stock → Qty Added → New (Carried-Forward) Total,
      so you can see exactly how stock built up over time.
    </p>
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; background:var(--ivory); padding:10px; border-radius:8px; margin-bottom:10px;">
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>Month:</span>
        <input type="month" style="width:150px;" value="${state.stockReportMonth||''}" onchange="state.stockReportMonth=this.value; if(this.value){state.stockReportDateFrom='';state.stockReportDateTo='';} render();">
      </div>
      <span style="font-size:11px; color:var(--text-dim);">— or —</span>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>From:</span>
        <input type="date" style="width:130px;" value="${state.stockReportDateFrom||''}" onchange="state.stockReportDateFrom=this.value; if(this.value){state.stockReportMonth='';} render();">
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>To:</span>
        <input type="date" style="width:130px;" value="${state.stockReportDateTo||''}" onchange="state.stockReportDateTo=this.value; if(this.value){state.stockReportMonth='';} render();">
      </div>
      <button class="btn-sm btn-ghost" onclick="state.stockReportMonth=''; state.stockReportDateFrom=''; state.stockReportDateTo=''; render();">Reset (All Time)</button>
    </div>
    ${(() => {
      const filteredMovements = getFilteredStockMovements();
      if(filteredMovements.length === 0){
        return `<div style="font-size:12px; color:var(--text-dim);">No stock movements match this date range.</div>`;
      }
      return `
    <table>
      <thead><tr><th>Date</th><th>Product</th><th>SKU</th><th>Old Stock</th><th>Qty Added</th><th>New Total</th><th>Supplier</th></tr></thead>
      <tbody>
        ${filteredMovements.slice(0,25).map(m=>`
          <tr>
            <td>${new Date(m.date).toLocaleDateString('en-IN')}</td>
            <td><b>${m.productName}</b></td>
            <td class="mono" style="font-size:11px;">${m.sku}</td>
            <td class="mono">${m.oldStock}</td>
            <td class="mono" style="color:var(--sage);">+${m.qtyAdded}</td>
            <td class="mono"><b>${m.newStock}</b></td>
            <td style="font-size:11.5px;">${m.supplier || '—'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    ${filteredMovements.length > 25 ? `<div style="font-size:11px; color:var(--text-dim); margin-top:6px;">Showing latest 25 of ${filteredMovements.length} — download the CSV for the full range.</div>` : ''}
      `;
    })()}
  </div>
  `;
}

function deleteProduct(id) {
  if(confirm('Are you sure you want to remove this product?')) {
    const prod = state.products.find(p => p.id === id);
    state.products = state.products.filter(p => p.id !== id);
    dbWrite(sb && sb.from('products').delete().eq('id', id), 'Delete product');
    logActivity('Deleted Product', prod ? prod.name : id);
    showToast('Product removed');
    render();
  }
}

// Lets you manually set the low-stock alert threshold per product, right
// from the Products table — no need to open Edit for a quick tweak.
function updateProductMinStock(id, value){
  const p = state.products.find(pp => pp.id === id);
  if(!p) return;
  const n = Number(value);
  p.minStock = isNaN(n) ? 5 : Math.max(0, n);
  dbWrite(sb && sb.from('products').update({ min_stock: p.minStock }).eq('id', p.id), 'Update low stock level');
  logActivity('Updated Low Stock Level', `${p.name} — min ${p.minStock}`);
  showToast('Low stock alert level updated for ' + p.name);
  render();
}

function exportStockMovementCSV(){
  const list = getFilteredStockMovements();
  if(list.length === 0){ showToast('No stock movements match the selected date range'); return; }
  let csv = 'Date,Product Name,SKU,Old Stock,Qty Added,New Stock (Carried Forward Total),Supplier,Invoice Number\n';
  list.forEach(m => {
    csv += `"${new Date(m.date).toLocaleDateString('en-IN')}","${m.productName}",${m.sku},${m.oldStock},${m.qtyAdded},${m.newStock},"${m.supplier||''}","${m.invoiceNumber||''}"\n`;
  });
  downloadCSV('Stock_Movement_Report.csv', csv);
}

// Stock Movement Report has its own Month picker OR custom From/To range —
// Month wins if both are set — independent of any other page's date filters.
function getStockMovementReportRange(){
  if(state.stockReportMonth){
    const [y, m] = state.stockReportMonth.split('-').map(Number);
    const from = new Date(y, m - 1, 1); from.setHours(0,0,0,0);
    const to = new Date(y, m, 0); to.setHours(23,59,59,999);
    return { from, to };
  }
  const from = state.stockReportDateFrom ? new Date(state.stockReportDateFrom) : null;
  if(from) from.setHours(0,0,0,0);
  const to = state.stockReportDateTo ? new Date(state.stockReportDateTo) : null;
  if(to) to.setHours(23,59,59,999);
  return { from, to };
}

function getFilteredStockMovements(){
  const { from, to } = getStockMovementReportRange();
  let list = state.stockMovements.slice();
  if(from) list = list.filter(m => new Date(m.date) >= from);
  if(to) list = list.filter(m => new Date(m.date) <= to);
  return list;
}

/* ============ INWARD MATERIALS (STOCK PURCHASE ENTRIES) ============ */

// Adds/increments a product in Inventory when it comes in through an Inward entry.
function addInwardProductToInventory(item, entryDate, entryMeta){
  const name = (item.name||'').trim();
  const qty = Number(item.qty)||0;
  let prod = state.products.find(p =>
    (item.sku && p.sku && p.sku.trim().toLowerCase() === item.sku.trim().toLowerCase()) ||
    p.name.trim().toLowerCase() === name.toLowerCase()
  );
  const oldStock = prod ? (Number(prod.stock) || 0) : 0;
  if(prod){
    prod.stock = oldStock + qty;
    if(item.brand) prod.brand = item.brand;
    if(item.sku) prod.sku = item.sku;
    if(item.category) prod.category = item.category;
    if(Number(item.price) > 0) prod.price = Number(item.price);
    if(item.gst !== '' && item.gst !== undefined && item.gst !== null && !isNaN(Number(item.gst))) prod.gst = Number(item.gst);
    dbWrite(sb && sb.from('products').update(dbMap.productToRow(prod)).eq('id', prod.id), 'Update product stock (inward)');
  } else {
    prod = {
      id: uid('P'),
      name: name,
      brand: item.brand || '',
      category: item.category || 'General',
      sku: (item.sku && item.sku.trim()) ? item.sku.trim() : uid('SKU').toUpperCase(),
      price: Number(item.price) || 0,
      gst: (item.gst === '' || item.gst === undefined || item.gst === null || isNaN(Number(item.gst))) ? state.settings.defaultGst : Number(item.gst),
      stock: qty,
      minStock: 5
    };
    state.products.push(prod);
    dbWrite(sb && sb.from('products').insert(dbMap.productToRow(prod)), 'Create product (inward)');
  }

  // Log this stock movement — old stock, qty added, and the carried-forward
  // new total — so a Stock Movement Report can be generated later from Products.
  const movement = {
    id: uid('MOV'),
    date: entryDate || new Date().toISOString().slice(0,10),
    productId: prod.id,
    productName: prod.name,
    sku: prod.sku,
    oldStock,
    qtyAdded: qty,
    newStock: prod.stock,
    supplier: (entryMeta && entryMeta.supplier) || '',
    invoiceNumber: (entryMeta && entryMeta.invoiceNumber) || ''
  };
  state.stockMovements.unshift(movement);
  dbWrite(sb && sb.from('stock_movements').insert(dbMap.movementToRow(movement)), 'Log stock movement');

  return prod;
}

// Shows "old stock + this entry's qty = new total stock" as the user types,
// so old stock visibly carries forward into the new stock total — nothing is
// overwritten, the new quantity is simply added on top of what's already there.
function updateInwardStockHint(){
  const hintEl = document.getElementById('inward-stock-hint');
  if(!hintEl) return;
  const nameEl = document.getElementById('inward-item-name');
  const skuEl = document.getElementById('inward-item-sku');
  const qtyEl = document.getElementById('inward-item-qty');
  const name = (nameEl && nameEl.value || '').trim().toLowerCase();
  const sku = (skuEl && skuEl.value || '').trim().toLowerCase();
  const qty = Number(qtyEl && qtyEl.value) || 0;
  if(!name && !sku){ hintEl.textContent = ''; return; }
  const existing = state.products.find(p =>
    (sku && p.sku && p.sku.trim().toLowerCase() === sku) ||
    (name && p.name.trim().toLowerCase() === name)
  );
  if(existing){
    const oldStock = Number(existing.stock) || 0;
    hintEl.textContent = `Existing product found — Old stock: ${oldStock}${qty > 0 ? ` + New: ${qty} = Carried-forward total: ${oldStock + qty}` : ' (old stock will carry forward and add up with the qty you enter)'}`;
  } else {
    hintEl.textContent = name || sku ? 'New product — this will be created fresh in inventory with the qty you enter as opening stock.' : '';
  }
}

function addInwardDraftItem(){
  const nameEl = document.getElementById('inward-item-name');
  const brandEl = document.getElementById('inward-item-brand');
  const skuEl = document.getElementById('inward-item-sku');
  const catEl = document.getElementById('inward-item-category');
  const qtyEl = document.getElementById('inward-item-qty');
  const costEl = document.getElementById('inward-item-cost');
  const priceEl = document.getElementById('inward-item-price');
  const gstEl = document.getElementById('inward-item-gst');

  const name = nameEl.value.trim();
  const brand = brandEl.value.trim();
  const sku = skuEl.value.trim();
  const category = catEl.value.trim();
  const qty = Number(qtyEl.value);
  const cost = Number(costEl.value) || 0;
  const price = Number(priceEl.value) || 0;
  const gst = gstEl.value === '' ? state.settings.defaultGst : Number(gstEl.value);

  if(!name){ showToast('Enter a product name'); return; }
  if(!qty || qty <= 0){ showToast('Enter a valid quantity'); return; }

  state.inwardDraftItems.push({ name, brand, sku, category, qty, cost, price, gst: isNaN(gst) ? state.settings.defaultGst : gst });
  nameEl.value = ''; brandEl.value = ''; skuEl.value = ''; catEl.value = '';
  qtyEl.value = ''; costEl.value = ''; priceEl.value = ''; gstEl.value = '';
  updateInwardStockHint();
  render();
}

function removeInwardDraftItem(idx){
  state.inwardDraftItems.splice(idx, 1);
  render();
}

function handleInwardBillUpload(inputEl){
  const file = inputEl.files[0];
  if(!file) return;
  const name = file.name.toLowerCase();
  const isPdf = name.endsWith('.pdf');
  const isImage = file.type.startsWith('image/');
  if(!isPdf && !isImage){
    showToast('Please upload a PDF or image file');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e){
    state.inwardBillFile = { name: file.name, dataUrl: e.target.result, type: file.type };
    showToast('Bill file uploaded successfully');
    render();
  };
  reader.readAsDataURL(file);
}

function clearInwardBillFile(){
  state.inwardBillFile = null;
  render();
}

function saveInwardEntry(){
  const supplier = (state.inwardDraftSupplier || '').trim();
  const dateVal = state.inwardDraftDate || new Date().toISOString().slice(0,10);
  const invoiceNumber = (state.inwardDraftInvoiceNumber || '').trim();
  const notes = (state.inwardDraftNotes || '').trim();

  if(!supplier){ showToast('Enter supplier / vendor name'); return; }
  if(state.inwardDraftItems.length === 0){ showToast('Add at least one product to this inward entry'); return; }

  // Push stock into inventory automatically for every product in this bill
  state.inwardDraftItems.forEach(item => {
    addInwardProductToInventory(item, dateVal, { supplier, invoiceNumber });
  });

  const totalQty = state.inwardDraftItems.reduce((s,i)=>s+i.qty, 0);
  const totalCost = state.inwardDraftItems.reduce((s,i)=>s+(i.qty*i.cost), 0);

  state.inwardEntries.unshift({
    id: uid('INW'),
    date: dateVal,
    supplier,
    invoiceNumber,
    notes,
    items: JSON.parse(JSON.stringify(state.inwardDraftItems)),
    totalQty,
    totalCost,
    billFile: state.inwardBillFile ? { ...state.inwardBillFile } : null
  });
  dbWrite(sb && sb.from('inward_entries').insert(dbMap.inwardToRow(state.inwardEntries[0])), 'Save inward entry');
  logActivity('Inward Entry Saved', `${supplier} — ${totalQty} units — ${money(totalCost)}`);

  state.inwardDraftItems = [];
  state.inwardBillFile = null;
  state.inwardDraftSupplier = '';
  state.inwardDraftDate = '';
  state.inwardDraftInvoiceNumber = '';
  state.inwardDraftNotes = '';
  showToast('Inward entry saved — stock updated automatically');
  render();
}

function deleteInwardEntry(id){
  if(confirm('Delete this inward entry? (This will NOT remove the stock already added.)')){
    const entry = state.inwardEntries.find(e => e.id === id);
    state.inwardEntries = state.inwardEntries.filter(e => e.id !== id);
    dbWrite(sb && sb.from('inward_entries').delete().eq('id', id), 'Delete inward entry');
    logActivity('Deleted Inward Entry', entry ? `${entry.supplier} — ${money(entry.totalCost)}` : id);
    showToast('Inward entry deleted');
    render();
  }
}

function downloadInwardBill(entryId){
  const entry = state.inwardEntries.find(e => e.id === entryId);
  if(!entry || !entry.billFile){ showToast('No bill file attached to this entry'); return; }
  const link = document.createElement('a');
  link.href = entry.billFile.dataUrl;
  link.download = entry.billFile.name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function resetInwardFilters(){
  state.inwardSearch = '';
  state.inwardDateFrom = '';
  state.inwardDateTo = '';
  render();
}

function getFilteredInwardEntries(){
  let list = state.inwardEntries.slice();

  list = list.filter(e => isDateInRange(e.date, state.inwardDateFrom, state.inwardDateTo));
  if(state.inwardSearch.trim()){
    const q = state.inwardSearch.trim().toLowerCase();
    list = list.filter(e =>
      e.supplier.toLowerCase().includes(q) ||
      e.items.some(i => i.name.toLowerCase().includes(q))
    );
  }
  return list;
}

function renderInward(){
  const filtered = getFilteredInwardEntries();

  return `
  <div class="page-head">
    <div><h1 class="page-title">Inward Materials</h1></div>
  </div>

  <!-- NEW INWARD ENTRY FORM -->
  <div class="card" style="margin-bottom:16px;">
    <h3 class="card-title" style="margin-top:0;">+ New Inward Entry</h3>
    <div class="field-row">
      <div class="field"><label>Supplier / Vendor Name</label><input id="inward-supplier" placeholder="e.g. Beauty Supplies Co." value="${state.inwardDraftSupplier}" oninput="state.inwardDraftSupplier=this.value;"></div>
      <div class="field"><label>Date</label><input type="date" id="inward-date" value="${state.inwardDraftDate || new Date().toISOString().slice(0,10)}" oninput="state.inwardDraftDate=this.value;"></div>
    </div>

    <label>Add Products (same fields as Products Inventory — all typed manually, nothing auto-fills)</label>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin:8px 0; align-items:flex-end;">
      <div style="flex:2; min-width:150px;"><label style="font-size:10.5px;">Product Name</label><input id="inward-item-name" placeholder="e.g. Argan Shampoo 250ml" oninput="updateInwardStockHint()"></div>
      <div style="flex:1; min-width:120px;"><label style="font-size:10.5px;">Brand</label><input id="inward-item-brand" placeholder="e.g. Loreal"></div>
      <div style="flex:1; min-width:110px;"><label style="font-size:10.5px;">SKU Code</label><input id="inward-item-sku" placeholder="auto if blank" oninput="updateInwardStockHint()"></div>
      <div style="flex:1; min-width:110px;"><label style="font-size:10.5px;">Category</label><input id="inward-item-category" placeholder="e.g. Hair Care"></div>
      <div style="flex:0 0 80px;"><label style="font-size:10.5px;">Qty / Stock</label><input type="number" id="inward-item-qty" placeholder="0" oninput="updateInwardStockHint()"></div>
      <div style="flex:0 0 100px;"><label style="font-size:10.5px;">Cost (₹/unit)</label><input type="number" id="inward-item-cost" placeholder="0"></div>
      <div style="flex:0 0 110px;"><label style="font-size:10.5px;">Selling Price (₹)</label><input type="number" id="inward-item-price" placeholder="0"></div>
      <div style="flex:0 0 90px;"><label style="font-size:10.5px;">GST (%)</label><input type="number" id="inward-item-gst" placeholder="${state.settings.defaultGst}"></div>
      <button class="btn btn-ghost btn-sm" onclick="addInwardDraftItem()">+ Add</button>
    </div>
    <div id="inward-stock-hint" style="font-size:11.5px; color:var(--text-dim); margin:-4px 0 8px;"></div>

    ${state.inwardDraftItems.length > 0 ? `
    <table style="margin-bottom:10px;">
      <thead><tr><th>Product</th><th>Brand</th><th>SKU</th><th>Category</th><th>Qty</th><th>Cost/Unit</th><th>Sell Price</th><th>GST</th><th>Line Total</th><th></th></tr></thead>
      <tbody>
        ${state.inwardDraftItems.map((it,idx)=>`
          <tr>
            <td>${it.name}</td>
            <td>${it.brand||'—'}</td>
            <td class="mono" style="font-size:11px;">${it.sku||'auto'}</td>
            <td>${it.category||'—'}</td>
            <td>${it.qty}</td>
            <td class="mono">${money(it.cost)}</td>
            <td class="mono">${money(it.price||0)}</td>
            <td class="mono">${it.gst !== undefined ? it.gst : state.settings.defaultGst}%</td>
            <td class="mono">${money(it.qty*it.cost)}</td>
            <td><button class="remove-x" onclick="removeInwardDraftItem(${idx})">×</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    ` : `<div style="font-size:12px; color:var(--text-dim); margin-bottom:10px;">No products added yet.</div>`}

    <label>Upload Inward Bill (image or PDF)</label>
    <input type="file" accept="image/*,.pdf" onchange="handleInwardBillUpload(this)" style="margin-bottom:8px;">
    ${state.inwardBillFile ? `
      <div style="display:flex; align-items:center; gap:8px; font-size:12px; margin-bottom:10px;">
        <span>📎 ${state.inwardBillFile.name}</span>
        <button class="remove-x" onclick="clearInwardBillFile()">×</button>
      </div>
    ` : ''}

    <div class="field"><label>Invoice Number / Reference</label><input id="inward-invoice-number" placeholder="e.g. INV-4521" value="${state.inwardDraftInvoiceNumber}" oninput="state.inwardDraftInvoiceNumber=this.value;"></div>
    <div class="field"><label>Notes (optional)</label><input id="inward-notes" placeholder="e.g. Paid by bank transfer" value="${state.inwardDraftNotes}" oninput="state.inwardDraftNotes=this.value;"></div>

    <button class="btn btn-gold" onclick="saveInwardEntry()">Save Inward Entry</button>
  </div>

  <!-- INWARD HISTORY / SEARCH / DOWNLOAD -->
  <div class="card">
    <h3 class="card-title" style="margin-top:0;">Inward History</h3>
    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:14px; background:var(--ivory); padding:10px; border-radius:8px; align-items:center;">
      <input type="text" id="inward-search-input" placeholder="Search supplier or product..." style="max-width:220px;" value="${state.inwardSearch}" oninput="state.inwardSearch=this.value; render();">
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>From:</span>
        <input type="date" style="width:130px;" value="${state.inwardDateFrom}" onchange="state.inwardDateFrom=this.value; render();">
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>To:</span>
        <input type="date" style="width:130px;" value="${state.inwardDateTo}" onchange="state.inwardDateTo=this.value; render();">
      </div>
      <button class="btn-sm btn-ghost" onclick="resetInwardFilters()">Reset</button>
    </div>

    ${filtered.length === 0 ? `<div class="empty-state">No inward entries found.</div>` : `
    <table>
      <thead><tr><th>Date</th><th>Supplier</th><th>Items</th><th>Total Qty</th><th>Total Cost</th><th>Bill</th><th>Action</th></tr></thead>
      <tbody>
        ${filtered.map(e=>`
          <tr>
            <td>${new Date(e.date).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</td>
            <td><b>${e.supplier}</b>${e.invoiceNumber ? `<div style="font-size:11px;color:var(--text-dim);">Invoice: ${e.invoiceNumber}</div>` : ''}${e.notes ? `<div style="font-size:11px;color:var(--text-dim);">${e.notes}</div>` : ''}</td>
            <td style="font-size:12px;">${e.items.map(i=>`${i.name} (${i.qty})`).join(', ')}</td>
            <td>${e.totalQty}</td>
            <td class="mono">${money(e.totalCost)}</td>
            <td>${e.billFile ? `<button class="btn-sm btn-ghost" onclick="downloadInwardBill('${e.id}')">⬇ Download</button>` : '<span style="color:var(--text-dim); font-size:11px;">No file</span>'}</td>
            <td><button class="btn-sm btn-danger" onclick="deleteInwardEntry('${e.id}')">Delete</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    `}
  </div>
  `;
}

/* ============ MODAL SYSTEM ============ */
function openModal(type, id){ 
  state.modal = type; 
  state.editingId = id || null; 
  if(type === 'customer'){
    if(id){
      const cust = state.customers.find(c => c.id === id);
      state.tempMembershipSelection = cust ? cust.membershipId : null;
      state.newCustomerPrefill = null;
    } else {
      state.tempMembershipSelection = null;
      state.newCustomerPrefill = null;
    }
  }
  if(type === 'appointment'){
    const existing = id ? state.appointments.find(a => a.id === id) : null;
    state.apDraft = existing ? { ...existing } : {
      // Default to a real time (10:00 AM) — not blank — so a fresh booking
      // still has a valid time even if the person never touches the AM/PM
      // dropdowns (they were previously left blank until touched, which
      // silently blocked saving with a "pick a date and time" error).
      date: new Date().toISOString().slice(0,10), time:'10:00', customerId:null, customerName:'', customerMobile:'',
      newCustomerDob:'', newCustomerGst:'',
      serviceId:null, serviceName:'', stylist:'', status:'Pending', notes:''
    };
    state.apCustomerSuggestions = [];
  }
  render(); 
}
function closeModal(){ 
  state.modal = null; 
  state.editingId = null; 
  state.newCustomerPrefill = null;
  state.tempMembershipSelection = null;
  state.pendingStaffLineId = null;
  state.apDraft = null;
  state.apCustomerSuggestions = [];
  render(); 
}

// Fixes the bug where picking a Membership Tier (which triggers a re-render)
// wiped out whatever Name/Mobile/DOB/GST the user had already typed in the
// Add/Edit Customer modal. We snapshot the currently-typed values into state
// BEFORE re-rendering so the form repopulates with what was typed, not blanks.
function handleMembershipTierChange(value){
  const snapshot = {
    name: (document.getElementById('m-name') || {}).value || '',
    mobile: (document.getElementById('m-mobile') || {}).value || '',
    dob: (document.getElementById('m-dob') || {}).value || '',
    gstNumber: (document.getElementById('m-gst-number') || {}).value || '',
    membershipId: value || null
  };
  if(state.editingId){
    const cust = state.customers.find(c => c.id === state.editingId);
    if(cust){ cust.name = snapshot.name; cust.mobile = snapshot.mobile; cust.dob = snapshot.dob; cust.gstNumber = snapshot.gstNumber; }
  } else {
    state.newCustomerPrefill = snapshot;
  }
  state.tempMembershipSelection = value || null;
  render();
}

function renderModal(){
  if(!state.modal) return '';

  let title = '';
  let content = '';

  if(state.modal === 'customer') {
    const cust = state.editingId
      ? state.customers.find(c => c.id === state.editingId)
      : (state.newCustomerPrefill || {name:'', mobile:'', dob:'', gstNumber:'', membershipId: null});
    title = state.editingId ? 'Edit Customer' : 'Add Customer';
    const selectedMembershipId = state.tempMembershipSelection !== undefined ? state.tempMembershipSelection : cust.membershipId;
    const selectedPlan = state.memberships.find(p => p.id === selectedMembershipId);
    content = `
      <div class="field"><label>Customer Name</label><input id="m-name" value="${cust.name||''}"></div>
      <div class="field"><label>Mobile</label><input id="m-mobile" value="${cust.mobile||''}"></div>
      <div class="field"><label>Date of Birth</label><input type="date" id="m-dob" value="${cust.dob||''}"></div>
      <div class="field"><label>Party GST Number (for B2B customers, optional)</label><input id="m-gst-number" value="${cust.gstNumber||''}" placeholder="e.g. 33ABCDE1234F1Z5"></div>
      <div class="field">
        <label>Membership Tier</label>
        <select id="m-membership-id" onchange="handleMembershipTierChange(this.value)">
          <option value="">-- Regular Customer (No Plan) --</option>
          ${state.memberships.map(plan => `
            <option value="${plan.id}" ${selectedMembershipId === plan.id ? 'selected' : ''}>
              ${plan.name} (${formatPlanDiscount(plan)} Off)
            </option>
          `).join('')}
        </select>
      </div>
      ${selectedPlan ? `
      <div class="field">
        <label>Membership Amount Collected (₹) — enter manually</label>
        <input type="number" id="m-membership-amount" value="${cust.membershipAmountPaid !== undefined && cust.membershipAmountPaid !== null ? cust.membershipAmountPaid : ''}" placeholder="e.g. 2000">
      </div>
      ` : ''}
      <button class="btn btn-gold" style="width:100%; margin-top:10px;" onclick="saveCustomerModal('${state.editingId||''}')">Save Customer</button>
    `;
  } else if(state.modal === 'appointment') {
    const appt = state.apDraft || { date: new Date().toISOString().slice(0,10), time:'', customerId:null, customerName:'', customerMobile:'', serviceId:null, serviceName:'', stylist:'', status:'Pending', notes:'' };
    const timeParts = time24ToParts(appt.time);
    title = state.editingId ? 'Edit Appointment' : 'Book Appointment';
    content = `
      <div class="field-row">
        <div class="field"><label>Date</label><input type="date" id="ap-date" value="${appt.date||''}" onchange="state.apDraft.date=this.value;"></div>
        <div class="field">
          <label>Time</label>
          <div style="display:flex; gap:6px;">
            <select id="ap-time-hour" style="flex:1;" onchange="updateApTimePart('hour12', this.value)">
              ${Array.from({length:12},(_,i)=>i+1).map(h => `<option value="${h}" ${timeParts.hour12===h?'selected':''}>${h}</option>`).join('')}
            </select>
            <select id="ap-time-minute" style="flex:1;" onchange="updateApTimePart('minute', this.value)">
              ${[0,5,10,15,20,25,30,35,40,45,50,55].map(m => `<option value="${m}" ${timeParts.minute===m?'selected':''}>${String(m).padStart(2,'0')}</option>`).join('')}
            </select>
            <select id="ap-time-ampm" style="flex:1;" onchange="updateApTimePart('ampm', this.value)">
              <option ${timeParts.ampm==='AM'?'selected':''}>AM</option>
              <option ${timeParts.ampm==='PM'?'selected':''}>PM</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field" style="position:relative;">
        <label>Customer Name</label>
        <input id="ap-customer-name" value="${appt.customerName||''}" placeholder="e.g. Anitha S." oninput="handleApCustomerSearchInput('customerName', this.value)" autocomplete="off">
        ${appt.customerId ? (() => {
          const linkedCust = state.customers.find(c => c.id === appt.customerId);
          return `<div style="font-size:11px; color:var(--sage); margin-top:3px;">✓ Existing customer — details auto-filled ${linkedCust ? `· ⭐ ${linkedCust.points||0} pts` : ''}</div>`;
        })() : ''}
        ${renderApCustomerSuggestions()}
      </div>
      <div class="field" style="position:relative;">
        <label>Mobile</label>
        <input id="ap-customer-mobile" value="${appt.customerMobile||''}" placeholder="e.g. 9876543210" oninput="handleApCustomerSearchInput('customerMobile', this.value)" autocomplete="off">
      </div>
      ${!appt.customerId ? `
      <div style="font-size:11px; color:var(--text-dim); margin:-6px 0 10px;">New customer — same details as Add Customer (optional, can fill in later from Customers tab):</div>
      <div class="field-row">
        <div class="field"><label>Date of Birth</label><input type="date" id="ap-customer-dob" value="${appt.newCustomerDob||''}" onchange="state.apDraft.newCustomerDob=this.value;"></div>
        <div class="field"><label>Party GST Number</label><input id="ap-customer-gst" value="${appt.newCustomerGst||''}" placeholder="optional, for B2B" onchange="state.apDraft.newCustomerGst=this.value;"></div>
      </div>
      ` : ''}
      <div class="field">
        <label>Service</label>
        <select id="ap-service" onchange="state.apDraft.serviceId=this.value; const s=state.services.find(x=>x.id===this.value); state.apDraft.serviceName = s?s.name:'';">
          <option value="">-- Select Service --</option>
          ${state.services.map(s => `<option value="${s.id}" ${appt.serviceId===s.id?'selected':''}>${s.name}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>Stylist</label>
        <select id="ap-stylist" onchange="state.apDraft.stylist=this.value;">
          <option value="">-- Any Stylist --</option>
          ${state.users.filter(u=>u.status==='Active').map(u => `<option value="${u.name}" ${appt.stylist===u.name?'selected':''}>${u.name}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>Status</label>
        <select id="ap-status" onchange="state.apDraft.status=this.value;">
          ${['Pending','Confirmed','Completed','Cancelled'].map(s => `<option ${appt.status===s?'selected':''}>${s}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Notes (optional)</label><textarea id="ap-notes" rows="2" onchange="state.apDraft.notes=this.value;">${appt.notes||''}</textarea></div>
      <button class="btn btn-gold" style="width:100%; margin-top:10px;" onclick="saveAppointmentModal('${state.editingId||''}')">${state.editingId ? 'Update Appointment' : 'Book Appointment'}</button>
    `;
  } else if(state.modal === 'user') {
    const usr = state.editingId ? state.users.find(u => u.id === state.editingId) : {name:'', role:'Stylist', mobile:'', status:'Active', dob:'', doj:''};
    title = state.editingId ? 'Edit User / Staff' : 'Add New User / Staff';
    content = `
      <div class="field"><label>Staff Name</label><input id="u-name" value="${usr.name||''}"></div>
      <div class="field">
        <label>Role</label>
        <select id="u-role">
          <option ${usr.role==='Stylist'?'selected':''}>Stylist</option>
          <option ${usr.role==='Receptionist'?'selected':''}>Receptionist</option>
          <option ${usr.role==='Manager'?'selected':''}>Manager</option>
          <option ${usr.role==='Helper'?'selected':''}>Helper</option>
        </select>
      </div>
      <div class="field"><label>Mobile Number</label><input id="u-mobile" value="${usr.mobile||''}"></div>
      <div class="field"><label>Date of Birth (DOB)</label><input type="date" id="u-dob" value="${usr.dob||''}"></div>
      <div class="field"><label>Date of Joining (DOJ)</label><input type="date" id="u-doj" value="${usr.doj||''}"></div>
      <div class="field">
        <label>Status</label>
        <select id="u-status">
          <option ${usr.status==='Active'?'selected':''}>Active</option>
          <option ${usr.status==='Inactive'?'selected':''}>Inactive</option>
        </select>
      </div>
      <button class="btn btn-gold" style="width:100%; margin-top:10px;" onclick="saveUserModal('${state.editingId||''}')">Save User</button>
    `;
  } else if(state.modal === 'service') {
    const srv = state.editingId ? state.services.find(s => s.id === state.editingId) : { id:'', code:'', name:'', category:'', duration:'', price:0, gst:18, commission:10, membershipPrice:null, hsnCode:'', sacCode:'' };
    title = state.editingId ? `Edit Service: ${srv.name}` : 'Add New Service';
    content = `
      <div class="field"><label>Service Code</label><input id="m-code" value="${srv.code || ''}"></div>
      <div class="field"><label>Service Name</label><input id="m-name" value="${srv.name || ''}"></div>
      <div class="field"><label>Category</label><input id="m-category" value="${srv.category || ''}"></div>
      <div class="field"><label>Duration (min)</label><input type="number" id="m-duration" value="${srv.duration || ''}"></div>
      <div class="field"><label>Price (₹)</label><input type="number" id="m-price" value="${srv.price || 0}"></div>
      <div class="field"><label>Membership Price (₹) — leave blank to use normal price</label><input type="number" id="m-member-price" value="${srv.membershipPrice !== undefined && srv.membershipPrice !== null ? srv.membershipPrice : ''}" placeholder="e.g. 450"></div>
      <div class="field"><label>GST Rate (%)</label><input type="number" id="m-gst" value="${srv.gst !== undefined ? srv.gst : 18}"></div>
      <div class="field"><label>Commission (%)</label><input type="number" id="m-commission" value="${srv.commission !== undefined ? srv.commission : 10}"></div>
      <div class="field"><label>HSN Code (manual entry)</label><input id="m-hsn-code" value="${srv.hsnCode || ''}" placeholder="e.g. 9997"></div>
      <div class="field"><label>SAC Code (manual entry)</label><input id="m-sac-code" value="${srv.sacCode || ''}" placeholder="e.g. 999722"></div>
      <button class="btn btn-gold" style="width:100%; margin-top:10px;" onclick="saveServiceModal('${state.editingId || ''}')">${state.editingId ? 'Update Service' : 'Save Service'}</button>
    `;
  } else if(state.modal === 'product') {
    const prod = state.editingId ? state.products.find(p => p.id === state.editingId) : {name:'', brand:'', price:0, gst:18, stock:0, sku:'', minStock:5};
    title = state.editingId ? 'Edit Product' : 'Add New Product';
    content = `
      <div class="field"><label>PRODUCT NAME</label><input id="p-name" value="${prod.name||''}"></div>
      <div class="field"><label>BRAND</label><input id="p-brand" value="${prod.brand||''}"></div>
      <div class="field"><label>SKU CODE</label><input id="p-sku" value="${prod.sku||''}"></div>
      <div class="field"><label>PRICE (₹)</label><input type="number" id="p-price" value="${prod.price||0}"></div>
      <div class="field"><label>GST RATE (%)</label><input type="number" id="p-gst" value="${prod.gst !== undefined ? prod.gst : 18}"></div>
      <div class="field"><label>STOCK QUANTITY</label><input type="number" id="p-stock" value="${prod.stock||0}"></div>
      <div class="field"><label>LOW STOCK ALERT LEVEL (manual)</label><input type="number" min="0" id="p-min-stock" value="${prod.minStock !== undefined ? prod.minStock : 5}" placeholder="e.g. 5"></div>
      <button class="btn btn-gold" style="width:100%; margin-top:10px;" onclick="saveProductModal('${state.editingId||''}')">Save Product</button>
    `;
  } else if(state.modal === 'assignStaff') {
    const line = state.cart.find(c => c.lineId === state.pendingStaffLineId);
    if(!line){
      // Line somehow gone (removed elsewhere) — just close quietly.
      state.modal = null; state.pendingStaffLineId = null;
      return '';
    }
    title = 'Who did this service?';
    content = `
      <div class="field">
        <label>SERVICE</label>
        <div style="font-weight:bold; margin-bottom:10px;">${line.name}</div>
        <label>SELECT STAFF</label>
        <select id="assign-staff-select">
          <option value="">-- Select Staff --</option>
          ${state.users.map(u=>`<option value="${u.name}">${u.name}</option>`).join('')}
        </select>
      </div>
      <button class="btn btn-gold" style="width:100%; margin-top:12px;" onclick="confirmAssignStaff()">Confirm</button>
      <button class="btn btn-ghost" style="width:100%; margin-top:8px;" onclick="cancelAssignStaff()">Remove This Service</button>
    `;
  }

  return `
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-head"><h3>${title}</h3>${state.modal==='assignStaff' ? '' : `<button class="close-x" onclick="closeModal()">×</button>`}</div>
      ${content}
    </div>
  </div>`;
}

function confirmAssignStaff(){
  const sel = document.getElementById('assign-staff-select');
  const name = sel ? sel.value : '';
  if(!name){
    showToast('Please select a staff member to continue');
    return;
  }
  const line = state.cart.find(c => c.lineId === state.pendingStaffLineId);
  if(line) line.sellerName = name;
  state.modal = null;
  state.pendingStaffLineId = null;
  syncPaymentWithTotal();
  render();
}

function cancelAssignStaff(){
  state.cart = state.cart.filter(c => c.lineId !== state.pendingStaffLineId);
  state.modal = null;
  state.pendingStaffLineId = null;
  syncPaymentWithTotal();
  render();
}

function saveCustomerModal(id) {
  const name = document.getElementById('m-name').value.trim();
  const mobile = document.getElementById('m-mobile').value.trim();
  const dob = document.getElementById('m-dob') ? document.getElementById('m-dob').value : '';
  const gstNumber = document.getElementById('m-gst-number') ? document.getElementById('m-gst-number').value.trim() : '';
  const membershipId = document.getElementById('m-membership-id').value || null;
  const memberAmountEl = document.getElementById('m-membership-amount');
  const membershipAmountPaid = memberAmountEl && memberAmountEl.value.trim() !== '' ? Number(memberAmountEl.value) : null;
  if(!name || !mobile) { showToast('Please enter name and mobile'); return; }

  if(id) {
    const cust = state.customers.find(c => c.id === id);
    if(cust) {
      cust.name = name; cust.mobile = mobile; cust.dob = dob; cust.gstNumber = gstNumber;
      cust.membershipId = membershipId; cust.membershipAmountPaid = membershipAmountPaid;
      dbWrite(sb && sb.from('customers').update(dbMap.customerToRow(cust)).eq('id', cust.id), 'Update customer');
      logActivity('Updated Customer', `${name} (${mobile})`);
    }
    showToast('Customer updated successfully');
  } else {
    const newCust = { id: uid('C'), name, mobile, dob, gstNumber, membershipId, membershipAmountPaid, points:0, preferredStylist:'' };
    state.customers.push(newCust);
    dbWrite(sb && sb.from('customers').insert(dbMap.customerToRow(newCust)), 'Save customer');
    logActivity('Added Customer', `${name} (${mobile})`);
    state.selectedCustomer = newCust.id;
    state.walkInDetails = { name: newCust.name, mobile: newCust.mobile };
    showToast('Customer added successfully');
  }
  state.newCustomerPrefill = null;
  state.tempMembershipSelection = null;
  closeModal();
}

/* ============ APPOINTMENTS ============ */
// Live "type name or mobile → see matching existing customers" search for
// the Book Appointment form. Picking a suggestion auto-fills their details;
// typing a name/mobile with no match just keeps it as a new walk-in booking.
function handleApCustomerSearchInput(field, value){
  if(!state.apDraft) return;
  state.apDraft[field] = value;
  // If they keep typing after picking someone, treat it as a fresh (possibly new) customer.
  state.apDraft.customerId = null;
  const q = value.trim().toLowerCase();
  if(q.length < 2){
    state.apCustomerSuggestions = [];
  } else {
    state.apCustomerSuggestions = state.customers
      .filter(c => c.name.toLowerCase().includes(q) || (c.mobile||'').includes(q))
      .slice(0, 6);
  }
  render();
}

function pickApCustomerSuggestion(custId){
  const cust = state.customers.find(c => c.id === custId);
  if(!cust || !state.apDraft) return;
  state.apDraft.customerId = cust.id;
  state.apDraft.customerName = cust.name;
  state.apDraft.customerMobile = cust.mobile || '';
  state.apCustomerSuggestions = [];
  render();
}

// 24-hour "HH:MM" (used for storage/sorting) <-> 12-hour hour/minute/AM-PM
// (used in the Book Appointment form, per request for an explicit AM/PM picker).
function time24ToParts(t){
  if(!t) return { hour12: 10, minute: 0, ampm: 'AM' };
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return { hour12, minute: m, ampm };
}
function timePartsTo24(hour12, minute, ampm){
  let h = Number(hour12) % 12;
  if(ampm === 'PM') h += 12;
  return String(h).padStart(2,'0') + ':' + String(Number(minute)).padStart(2,'0');
}
function updateApTimePart(part, value){
  if(!state.apDraft) return;
  const cur = time24ToParts(state.apDraft.time);
  const next = { ...cur, [part]: value };
  state.apDraft.time = timePartsTo24(next.hour12, next.minute, next.ampm);
  render();
}

function renderApCustomerSuggestions(){
  if(!state.apCustomerSuggestions || state.apCustomerSuggestions.length === 0) return '';
  return `
    <div style="position:absolute; z-index:20; left:0; right:0; top:100%; background:var(--paper); border:1px solid var(--line); border-radius:8px; box-shadow:0 8px 20px rgba(0,0,0,0.1); max-height:180px; overflow-y:auto; margin-top:3px;">
      ${state.apCustomerSuggestions.map(c => `
        <div style="padding:8px 12px; cursor:pointer; font-size:12.5px; border-bottom:1px solid var(--line); display:flex; justify-content:space-between; align-items:center;" onclick="pickApCustomerSuggestion('${c.id}')">
          <span><b>${c.name}</b> <span style="color:var(--text-dim);">— ${c.mobile}</span></span>
          <span class="tag" style="background:#eef2f7; color:#334155;">⭐ ${c.points||0} pts</span>
        </div>
      `).join('')}
    </div>
  `;
}

// The customer must exist in the database BEFORE the appointment that points to them
// (foreign key), so these run one after the other instead of in parallel. If the customer
// can't be saved, the appointment is still saved (unlinked) so a booking is never lost.
async function syncAppointmentToDb(mode, appt, newCustomer){
  if(!sb) return;
  const label = mode === 'insert' ? 'Book appointment' : 'Update appointment';
  try{
    let customerOk = true;
    if(newCustomer){
      const rc = await sb.from('customers').insert(dbMap.customerToRow(newCustomer));
      if(rc.error){ customerOk = false; addDbSyncWarning('Create customer from appointment', rc.error.message); }
    }
    const row = dbMap.appointmentToRow(appt);
    if(!customerOk) row.customer_id = null;
    const ra = mode === 'insert'
      ? await sb.from('appointments').insert(row)
      : await sb.from('appointments').update(row).eq('id', appt.id);
    if(ra.error) addDbSyncWarning(label, ra.error.message);
  }catch(err){
    addDbSyncWarning(label, String((err && err.message) || err));
  }
}

function saveAppointmentModal(id){
  const draft = state.apDraft || {};
  const date = draft.date;
  const time = draft.time;
  const customerName = (draft.customerName||'').trim();
  const customerMobile = (draft.customerMobile||'').trim();
  const serviceId = draft.serviceId || null;
  const service = serviceId ? state.services.find(s=>s.id===serviceId) : null;
  const stylist = draft.stylist || '';
  const status = draft.status || 'Pending';
  const notes = (draft.notes||'').trim();

  if(!date || !time){ showToast('Please pick a date and time'); return; }
  if(!customerName){ showToast('Please enter the customer name'); return; }

  // Prefer the customer explicitly picked from the suggestions list; fall
  // back to matching by exact name/mobile in case they typed it out fully.
  let createdCustomer = null;
  let matchedCustomer = draft.customerId
    ? state.customers.find(c => c.id === draft.customerId)
    : state.customers.find(c => c.name.toLowerCase() === customerName.toLowerCase() || (customerMobile && c.mobile === customerMobile));

  // No existing match — create a real customer record for them (so they
  // show up in Customers, earn points, etc.), not just a name on a booking.
  if(!matchedCustomer){
    matchedCustomer = {
      id: uid('C'), name: customerName, mobile: customerMobile,
      dob: draft.newCustomerDob || '', gstNumber: draft.newCustomerGst || '',
      membershipId:null, membershipAmountPaid:null, points:0, preferredStylist:''
    };
    state.customers.push(matchedCustomer);
    createdCustomer = matchedCustomer; // saved to the database together with the appointment, in order
    logActivity('Added Customer', matchedCustomer.name + ' (via appointment booking)');
  }

  if(id){
    const appt = state.appointments.find(a => a.id === id);
    if(appt){
      Object.assign(appt, {
        date, time, customerName, customerMobile,
        customerId: matchedCustomer.id,
        serviceId, serviceName: service ? service.name : '',
        stylist, status, notes
      });
      syncAppointmentToDb('update', appt, createdCustomer);
      logActivity('Updated Appointment', appt.customerName + ' — ' + appt.date + ' ' + appt.time);
    }
    showToast('Appointment updated');
  } else {
    const newAppt = {
      id: uid('AP'), date, time, customerName, customerMobile,
      customerId: matchedCustomer.id,
      serviceId, serviceName: service ? service.name : '',
      stylist, status, notes
    };
    state.appointments.push(newAppt);
    syncAppointmentToDb('insert', newAppt, createdCustomer);
    logActivity('Booked Appointment', newAppt.customerName + ' — ' + newAppt.date + ' ' + newAppt.time);
    showToast('Appointment booked');
  }
  // Jump the Appointments list to whatever date was just booked/edited —
  // otherwise a booking for a different day looks "missing" because the
  // list quietly stays on today's date.
  state.appointmentsFilterDate = date;
  state.apDraft = null;
  state.apCustomerSuggestions = [];
  closeModal();
}

function updateAppointmentStatus(id, newStatus){
  const appt = state.appointments.find(a => a.id === id);
  if(!appt) return;
  appt.status = newStatus;
  dbWrite(sb && sb.from('appointments').update({ status: newStatus }).eq('id', id), 'Update appointment status');
  logActivity('Appointment Status → ' + newStatus, appt.customerName + ' — ' + appt.date + ' ' + appt.time);
  showToast('Marked as ' + newStatus);
  render();
}

function deleteAppointment(id){
  if(!confirm('Delete this appointment?')) return;
  const appt = state.appointments.find(a => a.id === id);
  state.appointments = state.appointments.filter(a => a.id !== id);
  dbWrite(sb && sb.from('appointments').delete().eq('id', id), 'Delete appointment');
  logActivity('Deleted Appointment', appt ? `${appt.customerName} — ${appt.date} ${appt.time}` : id);
  showToast('Appointment deleted');
  render();
}

function getTodayAppointments(){
  const today = new Date().toISOString().slice(0,10);
  return state.appointments
    .filter(a => a.date === today && a.status !== 'Cancelled')
    .sort((a,b) => (a.time||'').localeCompare(b.time||''));
}

// All Pending appointments, across every date — not just today — sorted
// with the soonest (or most overdue) first.
function getAllPendingAppointments(){
  return state.appointments
    .filter(a => a.status === 'Pending')
    .sort((a,b) => (a.date+a.time).localeCompare(b.date+b.time));
}

function formatApptTime(t){
  if(!t) return '';
  const [h,m] = t.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2,'0')} ${period}`;
}

function renderAppointments(){
  const filterDate = state.appointmentsFilterDate || new Date().toISOString().slice(0,10);
  const list = state.appointments
    .filter(a => a.date === filterDate)
    .sort((a,b) => (a.time||'').localeCompare(b.time||''));
  const allPending = getAllPendingAppointments();

  const statusColor = { Pending:'tag-alert', Confirmed:'tag-gold', Completed:'tag-sage', Cancelled:'tag-rose' };

  return `
  <div class="page-head">
    <div>
      <span class="page-eyebrow">Bookings</span>
      <h1 class="page-title">Appointments</h1>
      <p class="page-sub">Book, track and manage customer appointments by time slot.</p>
    </div>
    <button class="btn btn-gold" onclick="openModal('appointment')">+ Book Appointment</button>
  </div>

  <div class="card" style="margin-bottom:16px; border:2px dashed var(--alert); background:#fff8f7;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:${allPending.length?'10px':'0'};">
      <h3 class="card-title" style="margin:0; color:var(--alert);">⏳ Pending Appointments <span style="font-weight:400; font-size:12px; color:var(--text-dim);">(all dates, not just today)</span></h3>
      <button class="btn-sm btn-ghost" onclick="state.pendingAppointmentsCollapsed=!state.pendingAppointmentsCollapsed; render();">${state.pendingAppointmentsCollapsed?'➕ Expand':'➖ Minimize'}</button>
    </div>
    ${state.pendingAppointmentsCollapsed ? '' : (allPending.length === 0 ? `<div style="font-size:12.5px; color:var(--text-dim);">No pending appointments right now.</div>` : `
    <table>
      <thead><tr><th>Date</th><th>Time</th><th>Customer</th><th>Service</th><th>Stylist</th><th>Action</th></tr></thead>
      <tbody>
        ${allPending.map(a => `
          <tr>
            <td class="mono">${new Date(a.date).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</td>
            <td class="mono">${formatApptTime(a.time)}</td>
            <td><b>${a.customerName}</b></td>
            <td>${a.serviceName || '—'}</td>
            <td>${a.stylist || 'Any'}</td>
            <td>
              <button class="btn-sm btn-gold" onclick="updateAppointmentStatus('${a.id}','Confirmed')">Confirm</button>
              <button class="btn-sm btn-ghost" onclick="state.appointmentsFilterDate='${a.date}'; render();">View</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    `)}
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
      <label style="margin:0;">Date</label>
      <input type="date" style="width:170px;" value="${filterDate}" onchange="state.appointmentsFilterDate=this.value; render();">
      <button class="btn-sm btn-ghost" onclick="state.appointmentsFilterDate=new Date().toISOString().slice(0,10); render();">Today</button>
      <span style="margin-left:auto; font-size:12.5px; color:var(--text-dim);">${list.length} appointment(s) on this date</span>
    </div>
  </div>

  <div class="card">
    ${list.length === 0 ? `<div class="empty-state">No appointments booked for this date yet.</div>` : `
    <table>
      <thead><tr><th>Time</th><th>Customer</th><th>Points</th><th>Service</th><th>Stylist</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${list.map(a => {
          const linkedCust = a.customerId ? state.customers.find(c => c.id === a.customerId) : null;
          return `
          <tr>
            <td class="mono">${formatApptTime(a.time)}</td>
            <td><b>${a.customerName}</b>${a.customerMobile ? `<br><span style="font-size:11px; color:var(--text-dim);">${a.customerMobile}</span>` : ''}</td>
            <td>${linkedCust ? `<span class="tag" style="background:#eef2f7; color:#334155;">⭐ ${linkedCust.points||0}</span>` : '—'}</td>
            <td>${a.serviceName || '—'}</td>
            <td>${a.stylist || 'Any'}</td>
            <td>
              <select style="width:auto; padding:4px 8px; font-size:11.5px;" onchange="updateAppointmentStatus('${a.id}', this.value)">
                ${['Pending','Confirmed','Completed','Cancelled'].map(s => `<option ${a.status===s?'selected':''}>${s}</option>`).join('')}
              </select>
            </td>
            <td>
              <button class="btn-sm btn-ghost" onclick="openModal('appointment','${a.id}')">Edit</button>
              <button class="btn-sm btn-danger" onclick="deleteAppointment('${a.id}')">Delete</button>
            </td>
          </tr>
        `;}).join('')}
      </tbody>
    </table>
    `}
  </div>
  `;
}

function saveUserModal(id) {
  const name = document.getElementById('u-name').value.trim();
  const role = document.getElementById('u-role').value;
  const mobile = document.getElementById('u-mobile').value.trim();
  const status = document.getElementById('u-status').value;
  const dobEl = document.getElementById('u-dob');
  const dob = dobEl ? dobEl.value : '';
  const dojEl = document.getElementById('u-doj');
  const doj = dojEl ? dojEl.value : '';

  if(!name) { showToast('Please enter user name'); return; }

  if(id) {
    const usr = state.users.find(u => u.id === id);
    if(usr) { 
      usr.name = name; usr.role = role; usr.mobile = mobile; usr.status = status; usr.dob = dob; usr.doj = doj;
      dbWrite(sb && sb.from('users').update(dbMap.userToRow(usr)).eq('id', usr.id), 'Update staff member');
      logActivity('Updated Staff User', `${name} (${role})`);
    }
    showToast('User updated successfully');
  } else {
    const newUser = { id: uid('U'), name, role, mobile, status, dob, doj };
    state.users.push(newUser);
    dbWrite(sb && sb.from('users').insert(dbMap.userToRow(newUser)), 'Add staff member');
    logActivity('Added Staff User', `${name} (${role})`);
    showToast('New User added successfully');
  }
  closeModal();
}

function saveServiceModal(id) {
  const code = document.getElementById('m-code').value.trim();
  const name = document.getElementById('m-name').value.trim();
  const category = document.getElementById('m-category').value.trim();
  const duration = Number(document.getElementById('m-duration').value);
  const price = Number(document.getElementById('m-price').value);
  const gst = Number(document.getElementById('m-gst').value);
  const commission = Number(document.getElementById('m-commission').value);
  const memberPriceRaw = document.getElementById('m-member-price').value;
  const membershipPrice = memberPriceRaw.trim() === '' ? null : Number(memberPriceRaw);
  const hsnCode = document.getElementById('m-hsn-code') ? document.getElementById('m-hsn-code').value.trim() : '';
  const sacCode = document.getElementById('m-sac-code') ? document.getElementById('m-sac-code').value.trim() : '';

  if(!name){ showToast('Service name is required'); return; }

  if(id) {
    const srv = state.services.find(s => s.id === id);
    if(srv) {
      srv.code = code || srv.code;
      srv.name = name;
      srv.category = category || srv.category;
      srv.duration = isNaN(duration) ? srv.duration : duration;
      srv.price = price;
      srv.gst = isNaN(gst) ? 18 : gst;
      srv.commission = isNaN(commission) ? 10 : commission;
      srv.membershipPrice = membershipPrice;
      srv.hsnCode = hsnCode;
      srv.sacCode = sacCode;
      dbWrite(sb && sb.from('services').update(dbMap.serviceToRow(srv)).eq('id', srv.id), 'Update service');
      logActivity('Updated Service', `${name} — ${money(price)}`);
      showToast('Service updated successfully');
    }
  } else {
    const newSrv = {
      id: uid('S'),
      code: code || `SRV-${state.services.length + 1}`,
      name,
      category: category || 'General',
      duration: isNaN(duration) ? 30 : duration,
      price: isNaN(price) ? 0 : price,
      gst: isNaN(gst) ? 18 : gst,
      commission: isNaN(commission) ? 10 : commission,
      membershipPrice,
      hsnCode,
      sacCode
    };
    state.services.push(newSrv);
    dbWrite(sb && sb.from('services').insert(dbMap.serviceToRow(newSrv)), 'Save service');
    logActivity('Added Service', `${name} — ${money(newSrv.price)}`);
    showToast('New service added successfully');
  }
  closeModal();
}

function saveProductModal(id) {
  const name = document.getElementById('p-name').value.trim();
  const brand = document.getElementById('p-brand').value.trim();
  const sku = document.getElementById('p-sku').value.trim();
  const price = Number(document.getElementById('p-price').value);
  const gstInput = document.getElementById('p-gst');
  const gst = gstInput ? Number(gstInput.value) : 18;
  const stock = Number(document.getElementById('p-stock').value);
  const minStockInput = document.getElementById('p-min-stock');
  const minStock = minStockInput && minStockInput.value !== '' ? Number(minStockInput.value) : 5;

  if(!name) { showToast('Product name is required'); return; }

  if(id) {
    const prod = state.products.find(p => p.id === id);
    if(prod) { 
      prod.name = name; 
      prod.brand = brand; 
      prod.sku = sku; 
      prod.price = price; 
      prod.gst = isNaN(gst) ? 18 : gst;
      prod.stock = stock; 
      prod.minStock = isNaN(minStock) ? 5 : minStock;
      dbWrite(sb && sb.from('products').update(dbMap.productToRow(prod)).eq('id', prod.id), 'Update product');
      logActivity('Updated Product', `${name} — ${money(price)} — Stock ${stock}`);
    }
    showToast('Product updated successfully');
  } else {
    const newProd = {id: uid('P'), name, brand, sku, price, stock, gst: isNaN(gst) ? 18 : gst, minStock: isNaN(minStock) ? 5 : minStock};
    state.products.push(newProd);
    dbWrite(sb && sb.from('products').insert(dbMap.productToRow(newProd)), 'Save product');
    logActivity('Added Product', `${name} — ${money(newProd.price)} — Stock ${stock}`);
    showToast('Product added successfully');
  }
  closeModal();
}

/* ============ REPORTS WITH DETAILED SELLER DATA ============ */
function exportFullReportsCSV() {
  let csv = 'Invoice ID,Date,Seller/Stylist,Item Name,Item Type,Qty,Item Price,Total Amount,Status\n';
  state.bills.forEach(b => {
    b.items.forEach(it => {
      const seller = it.sellerName || b.stylist || 'N/A';
      csv += `"${b.id}","${new Date(b.date).toLocaleDateString('en-IN')}","${seller}","${it.name}","${it.type}",${it.qty},${it.price},${it.price * it.qty},"${b.status}"\n`;
    });
  });
  downloadCSV('Detailed_Sales_Report.csv', csv);
}

// GST Filing Report — the exact fields an auditor needs to file GST returns:
// Date, Party Name, Invoice No, Taxable Value, GST %, GST Amount,
// CGST/SGST/IGST breakup, HSN/SAC code(s), and Party GST Number for B2B sales.
// Has its OWN date controls (Month picker OR a custom From/To range — Month
// wins if both are set) so it doesn't have to share the table's filters above,
// plus an "Active invoices only" switch to exclude Cancelled/Audited(closed) ones.
function getGSTFilingReportRange(){
  if(state.gstReportMonth){
    const [y, m] = state.gstReportMonth.split('-').map(Number);
    const from = new Date(y, m - 1, 1); from.setHours(0,0,0,0);
    const to = new Date(y, m, 0); to.setHours(23,59,59,999); // last day of month
    return { from, to };
  }
  const from = state.gstReportDateFrom ? new Date(state.gstReportDateFrom) : null;
  if(from) from.setHours(0,0,0,0);
  const to = state.gstReportDateTo ? new Date(state.gstReportDateTo) : null;
  if(to) to.setHours(23,59,59,999);
  return { from, to };
}

function exportGSTFilingReportCSV(){
  const { from, to } = getGSTFilingReportRange();
  let list = state.bills.slice();
  if(from) list = list.filter(b => new Date(b.date) >= from);
  if(to) list = list.filter(b => new Date(b.date) <= to);
  if(state.gstReportActiveOnly){
    list = list.filter(b => b.status !== 'CANCELLED' && b.status !== 'AUDITED');
  }
  if(list.length === 0){ showToast('No invoices match the selected date range / filters for this report'); return; }

  let csv = 'Date,Party Name,Invoice No,Taxable Value,GST Percentage,GST Amount,CGST,SGST,IGST,HSN/SAC Code,Party GST Number\n';
  list.forEach(b => {
    const cust = state.customers.find(c => c.id === b.customerId);
    const partyName = cust ? cust.name : 'Walk-in';
    const taxableValue = Number(b.subtotal) || 0;
    const gstAmount = Number(b.gst) || 0;
    const gstPercent = taxableValue > 0 ? round2((gstAmount / taxableValue) * 100) : 0;
    const isInterState = !!b.isIGST;
    const cgst = isInterState ? 0 : round2(gstAmount / 2);
    const sgst = isInterState ? 0 : round2(gstAmount / 2);
    const igst = isInterState ? round2(gstAmount) : 0;
    const codes = Array.from(new Set(b.items.map(it => {
      const svc = it.type === 'service' ? state.services.find(s => s.id === it.refId) : null;
      if(!svc) return '';
      return [svc.hsnCode, svc.sacCode].filter(Boolean).join('/');
    }).filter(Boolean))).join(' | ');
    const partyGst = b.isB2B ? (b.partyGst || '') : '';

    csv += `"${new Date(b.date).toLocaleDateString('en-IN')}","${partyName}","${b.id}",${taxableValue},${gstPercent},${gstAmount},${cgst},${sgst},${igst},"${codes}","${partyGst}"\n`;
  });
  downloadCSV('GST_Filing_Report.csv', csv);
}

function getFilteredReportBills(){
  let list = state.bills.slice();
  list = list.filter(b => isDateInRange(b.date, state.reportsDateFrom, state.reportsDateTo));
  if(state.reportsSearch && state.reportsSearch.trim()){
    const q = state.reportsSearch.trim().toLowerCase();
    list = list.filter(b =>
      b.id.toLowerCase().includes(q) ||
      (b.stylist||'').toLowerCase().includes(q) ||
      b.items.some(i => i.name.toLowerCase().includes(q))
    );
  }
  return list;
}

function resetReportsFilters(){
  state.reportsDateFrom = '';
  state.reportsDateTo = '';
  state.reportsSearch = '';
  render();
}

// Once an auditor has reviewed & filed an invoice, mark it AUDITED so it's
// locked from further edits/cancellation — a clear "closed" state.
function markAsAudited(billId){
  const bill = state.bills.find(b => b.id === billId);
  if(!bill) return;
  if(bill.status === 'CANCELLED'){ showToast('Cannot audit a cancelled invoice'); return; }
  bill.status = 'AUDITED';
  bill.auditedAt = new Date();
  dbWrite(sb && sb.from('bills').update({ status: 'AUDITED', audited_at: bill.auditedAt }).eq('id', billId), 'Mark invoice audited');
  logActivity('Marked Invoice Audited', `${billId} — ${money(bill.total)}`);
  showToast('Invoice ' + billId + ' marked as Audited (Closed)');
  render();
}

/* ============ CUSTOMER DISCOUNT REPORT ============ */
// Who got how much discount, how many times they've visited, their total
// billing, and a per-bill breakdown — so discount-giving can be audited.
function getCustomerDiscountReport(){
  let bills = state.bills.filter(b => b.status !== 'CANCELLED');
  bills = bills.filter(b => isDateInRange(b.date, state.discountReportDateFrom, state.discountReportDateTo));

  const map = new Map();
  bills.forEach(b => {
    const cust = b.customerId ? state.customers.find(c => c.id === b.customerId) : null;
    const key = b.customerId || ('walkin:' + (b.stylist || 'unknown') + ':' + b.id); // walk-ins without a saved profile counted individually
    const name = cust ? cust.name : 'Walk-in (no profile)';
    const mobile = cust ? cust.mobile : '';

    if(!map.has(key)){
      map.set(key, { customerId: b.customerId || null, name, mobile, visits: 0, totalBilling: 0, totalDiscount: 0, totalMembershipDiscount: 0, totalManualDiscount: 0, bills: [] });
    }
    const entry = map.get(key);
    const membershipDisc = Number(b.membershipDiscount) || 0;
    const manualDisc = Number(b.discount) || 0;
    const billDiscount = membershipDisc + manualDisc;

    entry.visits += 1;
    entry.totalBilling += Number(b.total) || 0;
    entry.totalDiscount += billDiscount;
    entry.totalMembershipDiscount += membershipDisc;
    entry.totalManualDiscount += manualDisc;
    entry.bills.push({ id: b.id, date: b.date, total: Number(b.total)||0, discount: billDiscount, membershipDiscount: membershipDisc, manualDiscount: manualDisc });
  });

  let result = Array.from(map.values());

  if(state.discountReportSearch && state.discountReportSearch.trim()){
    const q = state.discountReportSearch.trim().toLowerCase();
    result = result.filter(e => e.name.toLowerCase().includes(q) || (e.mobile||'').includes(q));
  }

  result.forEach(e => e.bills.sort((a,b) => new Date(b.date) - new Date(a.date)));
  return result.sort((a,b) => b.totalDiscount - a.totalDiscount);
}

function resetDiscountReportFilters(){
  state.discountReportDateFrom = '';
  state.discountReportDateTo = '';
  state.discountReportSearch = '';
  state.discountReportExpanded = null;
  render();
}

function toggleDiscountReportRow(key){
  state.discountReportExpanded = (state.discountReportExpanded === key) ? null : key;
  render();
}

function exportDiscountReportCSV(){
  const data = getCustomerDiscountReport();
  let csv = 'Customer,Mobile,Visits,Total Billing,Total Discount,Membership Discount,Manual/Coupon Discount,Discount %\n';
  data.forEach(e => {
    const pct = e.totalBilling > 0 ? ((e.totalDiscount / (e.totalBilling + e.totalDiscount)) * 100).toFixed(1) : '0.0';
    csv += `"${e.name}","${e.mobile}",${e.visits},${e.totalBilling.toFixed(2)},${e.totalDiscount.toFixed(2)},${e.totalMembershipDiscount.toFixed(2)},${e.totalManualDiscount.toFixed(2)},${pct}%\n`;
  });
  csv += '\n\nInvoice-level detail\nCustomer,Invoice ID,Date,Bill Total,Discount Given\n';
  data.forEach(e => {
    e.bills.forEach(b => {
      csv += `"${e.name}",${b.id},${new Date(b.date).toLocaleDateString('en-IN')},${b.total.toFixed(2)},${b.discount.toFixed(2)}\n`;
    });
  });
  downloadCSV('Customer_Discount_Report.csv', csv);
}

function renderDiscountReport(){
  const data = getCustomerDiscountReport();
  const grandTotalDiscount = data.reduce((s,e)=>s+e.totalDiscount, 0);
  const grandTotalBilling = data.reduce((s,e)=>s+e.totalBilling, 0);

  return `
  <div class="page-head"><div><h1 class="page-title">Customer Discount Report</h1></div></div>

  <div class="grid grid-3" style="margin-bottom:16px;">
    <div class="card">
      <div class="stat-label">Total Discount Given</div>
      <div class="stat-value rose">${money(grandTotalDiscount)}</div>
      <div class="stat-delta">${data.length} customer(s) in range</div>
    </div>
    <div class="card">
      <div class="stat-label">Total Billing (after discount)</div>
      <div class="stat-value">${money(grandTotalBilling)}</div>
    </div>
    <div class="card">
      <div class="stat-label">Avg Discount %</div>
      <div class="stat-value gold">${grandTotalBilling+grandTotalDiscount > 0 ? ((grandTotalDiscount/(grandTotalBilling+grandTotalDiscount))*100).toFixed(1) : '0.0'}%</div>
    </div>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
      <input type="text" id="discount-report-search-input" placeholder="Search customer name or mobile..." style="max-width:220px;" value="${state.discountReportSearch||''}" oninput="state.discountReportSearch=this.value; render();">
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>From:</span>
        <input type="date" style="width:130px;" value="${state.discountReportDateFrom||''}" onchange="state.discountReportDateFrom=this.value; render();">
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>To:</span>
        <input type="date" style="width:130px;" value="${state.discountReportDateTo||''}" onchange="state.discountReportDateTo=this.value; render();">
      </div>
      <button class="btn-sm btn-ghost" onclick="resetDiscountReportFilters()">Reset</button>
      <button class="btn-sm btn-gold" style="margin-left:auto;" onclick="exportDiscountReportCSV()">Export CSV</button>
    </div>
  </div>

  <div class="card">
    ${data.length === 0 ? `<div class="empty-state">No discounts given in this date range.</div>` : `
    <table>
      <thead><tr><th>Customer</th><th>Visits</th><th>Total Billing</th><th>Total Discount</th><th>Discount %</th><th></th></tr></thead>
      <tbody>
        ${data.map((e,idx) => {
          const key = e.customerId || ('row'+idx);
          const pct = (e.totalBilling+e.totalDiscount) > 0 ? ((e.totalDiscount/(e.totalBilling+e.totalDiscount))*100).toFixed(1) : '0.0';
          const isExpanded = state.discountReportExpanded === key;
          return `
          <tr>
            <td><b>${e.name}</b>${e.mobile ? `<div style="font-size:11px; color:var(--text-dim);">${e.mobile}</div>` : ''}</td>
            <td>${e.visits}</td>
            <td class="mono">${money(e.totalBilling)}</td>
            <td class="mono" style="color:var(--rose); font-weight:600;">${money(e.totalDiscount)}</td>
            <td>${pct}%</td>
            <td><button class="btn-sm btn-ghost" onclick="toggleDiscountReportRow('${key}')">${isExpanded ? 'Hide' : 'View'} Bills</button></td>
          </tr>
          ${isExpanded ? `
          <tr>
            <td colspan="6" style="background:var(--ivory); padding:10px 14px;">
              <table style="background:transparent;">
                <thead><tr><th>Invoice</th><th>Date</th><th>Bill Total</th><th>Discount</th></tr></thead>
                <tbody>
                  ${e.bills.map(b => `
                    <tr>
                      <td class="mono">${b.id}</td>
                      <td>${new Date(b.date).toLocaleDateString('en-IN')}</td>
                      <td class="mono">${money(b.total)}</td>
                      <td class="mono" style="color:var(--rose);">${money(b.discount)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </td>
          </tr>
          ` : ''}
          `;
        }).join('')}
      </tbody>
    </table>
    `}
  </div>`;
}

/* ============ ACTIVITY LOGS ============ */
function getFilteredActivityLogs(){
  let logs = state.activityLogs || [];
  logs = logs.filter(l => isDateInRange(l.createdAt, state.activityLogDateFrom, state.activityLogDateTo));
  if(state.activityLogSearch && state.activityLogSearch.trim()){
    const q = state.activityLogSearch.trim().toLowerCase();
    logs = logs.filter(l =>
      (l.userName||'').toLowerCase().includes(q) ||
      (l.action||'').toLowerCase().includes(q) ||
      (l.details||'').toLowerCase().includes(q)
    );
  }
  return logs;
}

function resetActivityLogFilters(){
  state.activityLogSearch = '';
  state.activityLogDateFrom = '';
  state.activityLogDateTo = '';
  render();
}

function exportActivityLogsCSV(){
  const logs = getFilteredActivityLogs();
  let csv = 'Date/Time,User,Role,Action,Details\n';
  logs.forEach(l => {
    csv += `"${new Date(l.createdAt).toLocaleString('en-IN')}","${l.userName}","${l.userRole}","${l.action}","${(l.details||'').replace(/"/g,'""')}"\n`;
  });
  downloadCSV('Activity_Logs.csv', csv);
}

const ACTION_TAG_CLASS = {
  'Login': 'tag-sage', 'Logout': 'tag-sage',
  'Created Bill': 'tag-gold', 'Created B2B Invoice': 'tag-gold',
  'Cancelled Invoice': 'tag-rose', 'Marked Invoice Audited': 'tag-gold',
  'Deleted Customer': 'tag-rose', 'Deleted Staff User': 'tag-rose',
  'Deleted Product': 'tag-rose', 'Deleted Inward Entry': 'tag-rose',
};

function renderActivityLogs(){
  const logs = getFilteredActivityLogs();
  return `
  <div class="page-head"><div><h1 class="page-title">Activity Logs</h1></div></div>

  <div class="card" style="margin-bottom:16px;">
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
      <input type="text" id="activity-log-search-input" placeholder="Search user, action or details..." style="max-width:240px;" value="${state.activityLogSearch||''}" oninput="state.activityLogSearch=this.value; render();">
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>From:</span>
        <input type="date" style="width:130px;" value="${state.activityLogDateFrom||''}" onchange="state.activityLogDateFrom=this.value; render();">
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>To:</span>
        <input type="date" style="width:130px;" value="${state.activityLogDateTo||''}" onchange="state.activityLogDateTo=this.value; render();">
      </div>
      <button class="btn-sm btn-ghost" onclick="resetActivityLogFilters()">Reset</button>
      <button class="btn-sm btn-gold" style="margin-left:auto;" onclick="exportActivityLogsCSV()">Export CSV</button>
    </div>
  </div>

  <div class="card">
    ${logs.length === 0 ? `<div class="empty-state">No activity recorded for this filter.</div>` : `
    <table>
      <thead><tr><th>Date / Time</th><th>User</th><th>Action</th><th>Details</th></tr></thead>
      <tbody>
        ${logs.map(l => `
          <tr>
            <td style="white-space:nowrap; font-size:12px;">${new Date(l.createdAt).toLocaleString('en-IN')}</td>
            <td><b>${l.userName}</b>${l.userRole ? `<div style="font-size:10.5px; color:var(--text-dim);">${l.userRole}</div>` : ''}</td>
            <td><span class="tag ${ACTION_TAG_CLASS[l.action] || 'tag-sage'}">${l.action}</span></td>
            <td style="font-size:12.5px; color:#555;">${l.details || ''}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    `}
  </div>`;
}

function renderReports(){
  const filtered = getFilteredReportBills();
  return `
  <div class="page-head"><div><h1 class="page-title">Auditor Reports</h1></div></div>
  <div class="card" style="margin-bottom:16px;">
    <button class="btn btn-gold" onclick="exportFullReportsCSV()">Download Detailed Report CSV (with Seller Info)</button>
  </div>

  <div class="card" style="margin-bottom:16px; border:2px dashed #b8860b; background:#fffdfa;">
    <h3 style="margin:0 0 6px; color:#8b6508;">📋 GST Filing Report</h3>
    <p style="font-size:12px; color:#666; margin-bottom:10px;">
      Everything needed for GST filing in one CSV: Date, Party Name, Invoice No, Taxable Value,
      GST %, GST Amount, CGST/SGST/IGST breakup, HSN/SAC Code, and Party GST Number (for B2B sales).
      Pick a Month, or a custom From/To range — this report has its own date controls, separate from the table filter below.
    </p>
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; background:var(--ivory); padding:10px; border-radius:8px; margin-bottom:10px;">
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>Month:</span>
        <input type="month" style="width:150px;" value="${state.gstReportMonth||''}" onchange="state.gstReportMonth=this.value; if(this.value){state.gstReportDateFrom='';state.gstReportDateTo='';} render();">
      </div>
      <span style="font-size:11px; color:var(--text-dim);">— or —</span>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>From:</span>
        <input type="date" style="width:130px;" value="${state.gstReportDateFrom||''}" onchange="state.gstReportDateFrom=this.value; if(this.value){state.gstReportMonth='';} render();">
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>To:</span>
        <input type="date" style="width:130px;" value="${state.gstReportDateTo||''}" onchange="state.gstReportDateTo=this.value; if(this.value){state.gstReportMonth='';} render();">
      </div>
      <button class="btn-sm btn-ghost" onclick="state.gstReportMonth=''; state.gstReportDateFrom=''; state.gstReportDateTo=''; render();">Reset (All Time)</button>
    </div>
    <label style="display:flex; align-items:center; gap:8px; font-size:12.5px; cursor:pointer; margin-bottom:10px;">
      <input type="checkbox" ${state.gstReportActiveOnly ? 'checked' : ''} onchange="state.gstReportActiveOnly=this.checked; render();">
      Active invoices only (excludes Cancelled and already-Audited/Closed invoices)
    </label>
    <button class="btn btn-gold" onclick="exportGSTFilingReportCSV()">Download GST Filing Report CSV</button>
  </div>

  <div class="card" style="margin-bottom:16px;">
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
      <input type="text" id="reports-search-input" placeholder="Search Invoice ID, Stylist or Item..." style="max-width:220px;" value="${state.reportsSearch||''}" oninput="state.reportsSearch=this.value; render();">
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>From:</span>
        <input type="date" style="width:130px;" value="${state.reportsDateFrom||''}" onchange="state.reportsDateFrom=this.value; render();">
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:12px;">
        <span>To:</span>
        <input type="date" style="width:130px;" value="${state.reportsDateTo||''}" onchange="state.reportsDateTo=this.value; render();">
      </div>
      <button class="btn-sm btn-ghost" onclick="resetReportsFilters()">Reset</button>
    </div>
  </div>

  <div class="card">
    <table>
      <thead><tr><th>Invoice ID</th><th>Date</th><th>Stylist/Seller</th><th>Items & Sellers</th><th>Total</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${filtered.length === 0 ? `<tr><td colspan="7" style="text-align:center; color:var(--text-dim); padding:20px;">No invoices found for this filter.</td></tr>` : filtered.map(b=>{
          const isCancelled = b.status === 'CANCELLED';
          const isAudited = b.status === 'AUDITED';
          const itemsBreakdown = b.items.map(i => `${i.name} (${i.sellerName || b.stylist || 'N/A'})`).join(', ');
          const statusTag = isCancelled ? 'tag-rose' : isAudited ? 'tag-gold' : 'tag-sage';

          return `
          <tr>
            <td class="mono">${b.id}</td>
            <td>${new Date(b.date).toLocaleDateString('en-IN')}</td>
            <td><b>${b.stylist || 'N/A'}</b></td>
            <td style="font-size:11px; color:#555;">${itemsBreakdown}</td>
            <td>${money(b.total)}</td>
            <td><span class="tag ${statusTag}">${isAudited ? 'AUDITED (Closed)' : (b.status || 'ACTIVE')}</span>${b.isB2B ? ' <span class="tag tag-gold" style="font-size:9.5px;">B2B</span>' : ''}</td>
            <td>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button class="btn-sm btn-ghost" onclick="viewBillDetails('${b.id}')">Preview</button>
                <button class="btn-sm btn-ghost" onclick="printBillDirectly('${b.id}')">Print</button>
                ${!isCancelled && !isAudited ? `<button class="btn-sm btn-gold" onclick="markAsAudited('${b.id}')">✓ Mark Audited</button>` : ''}
                ${!isCancelled && !isAudited ? `<button class="btn-sm btn-danger" onclick="cancelInvoice('${b.id}')">Cancel</button>` : ''}
              </div>
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}

/* ============ SETTINGS ============ */
function renderSettings(){
  const s = state.settings;
  const isConnected = !!sb;
  return `
  <div class="page-head"><div><h1 class="page-title">Settings</h1></div></div>

  <div class="card" style="max-width:560px; margin-bottom:16px; background:${isConnected ? '#eef7f0' : '#fdf0ef'}; border-color:${isConnected ? 'var(--sage)' : 'var(--alert)'};">
    <h3 style="margin-bottom:6px;">${isConnected ? '🟢' : '🔴'} Database Connection</h3>
    <div style="font-size:13px;">
      ${isConnected
        ? 'Connected to Supabase. Bills, customers, products, and everything else is being saved to the cloud database.'
        : 'NOT connected — the app is running in local-only mode. Data will NOT survive a page refresh. Check the Supabase script tag in index.html.'}
    </div>
    <div style="margin-top:10px; font-size:11.5px; color:var(--text-dim);">
      ⚠️ You'll always get a banner at the top of the app if a save to the database fails, so nothing goes unnoticed.
    </div>
  </div>

  ${sb ? `` : `
  <div class="card" style="max-width:560px; margin-bottom:16px;">
    <h3 style="margin-bottom:6px;">🔐 Login PINs (local-only fallback)</h3>
    <p style="font-size:12px; color:var(--alert); margin-bottom:12px;">
      ⚠️ Not connected to Supabase, so the app is using basic PIN login instead of real accounts —
      this is NOT secure, only meant for local testing. Connect Supabase for real login security.
    </p>
    <div class="field-row">
      <div class="field"><label>Admin PIN</label><input id="set-admin-pin" value="${s.adminPin}" placeholder="e.g. 1234"></div>
      <div class="field"><label>Staff PIN</label><input id="set-staff-pin" value="${s.staffPin}" placeholder="e.g. 0000"></div>
    </div>
    <button class="btn btn-gold btn-sm" onclick="savePins()">Save PINs</button>
  </div>
  `}

  <div class="card" style="max-width:560px; margin-bottom:16px; background:#fff;">
    <h3 style="margin-bottom:12px; color:var(--text);">👑 Manage Membership Plans</h3>
    
    <div style="display:flex; gap:8px; margin-bottom:14px; flex-wrap:wrap;">
      <input type="text" id="new-plan-name" placeholder="Plan Name (e.g. VIP Member)" style="flex:2; min-width:140px; padding:8px; border:1px solid #ddd; border-radius:4px;">
      <select id="new-plan-type" style="flex:1; min-width:110px; padding:8px; border:1px solid #ddd; border-radius:4px;">
        <option value="percent">Percentage (%)</option>
        <option value="flat">Flat Amount (₹)</option>
      </select>
      <input type="number" id="new-plan-value" placeholder="Discount Value" style="flex:1; min-width:100px; padding:8px; border:1px solid #ddd; border-radius:4px;" min="0">
      <button class="btn btn-gold btn-sm" onclick="addMembershipPlan(document.getElementById('new-plan-name').value, document.getElementById('new-plan-type').value, document.getElementById('new-plan-value').value)">+ Add Plan</button>
    </div>

    <table>
      <thead>
        <tr><th>Plan Name</th><th>Type</th><th>Discount Value (Editable)</th><th>Action</th></tr>
      </thead>
      <tbody>
        ${state.memberships.map(plan => `
          <tr>
            <td><b>${plan.name}</b></td>
            <td>
              <select style="padding:4px; border:1px solid #ccc; border-radius:4px;" onchange="updateMembershipPlan('${plan.id}', this.value, document.getElementById('plan-value-${plan.id}').value)">
                <option value="percent" ${plan.discountType!=='flat'?'selected':''}>Percentage (%)</option>
                <option value="flat" ${plan.discountType==='flat'?'selected':''}>Flat Amount (₹)</option>
              </select>
            </td>
            <td>
              <div style="display:flex; align-items:center; gap:4px;">
                <span>${plan.discountType==='flat' ? '₹' : ''}</span>
                <input id="plan-value-${plan.id}" type="number" value="${plan.discountValue}" min="0" style="width:65px; padding:4px; text-align:center; border:1px solid #ccc; border-radius:4px;" onchange="updateMembershipPlan('${plan.id}', '${plan.discountType}', this.value)">
                <span>${plan.discountType!=='flat' ? '%' : ''}</span>
              </div>
            </td>
            <td><button class="btn-sm btn-danger" onclick="deleteMembershipPlan('${plan.id}')">Delete</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>

  <div class="card" style="max-width:560px; margin-bottom:16px; border:2px dashed #b8860b; background:#fffdfa;">
    <h3 style="margin-bottom:6px; color:#8b6508;">📄 Auto-Fill Settings via GST Certificate</h3>
    <p style="font-size:12px; color:#666; margin-bottom:12px;">
      Upload your GST Registration Certificate image/PDF. The scanner will automatically extract GSTIN, Salon Name, and Address!
    </p>
    
    <div style="display:flex; gap:10px; align-items:center;">
      <input type="file" id="gst-cert-input" accept="image/*" style="display:none;" onchange="handleGstCertUpload(event)">
      <button class="btn btn-gold" onclick="document.getElementById('gst-cert-input').click()" ${state.isScanning?'disabled':''}>
        ${state.isScanning ? '⏳ Scanning Certificate...' : '📤 Upload GST Certificate'}
      </button>
      ${state.isScanning ? '<span style="font-size:12px; color:var(--text-dim);">Processing OCR...</span>' : ''}
    </div>
  </div>

  <div class="card" style="max-width:560px; margin-bottom:16px;">
    <h3 style="margin-bottom:6px;">📦 Daily Full Stock Report (Automatic Email)</h3>
    <p style="font-size:12px; color:var(--text-dim); margin-bottom:12px;">
      Emails the actual current stock of <b>every product</b> (not just low-stock ones) once a day —
      fully automatic, no tap needed. Sent to the address & EmailJS setup configured below in
      "Low Stock Email Alerts". (WhatsApp can't be used here since WhatsApp always requires a manual
      tap to send — only email can go out silently in the background.)
    </p>
    <div class="field-row">
      <div class="field">
        <label>Enable daily stock report</label>
        <select id="set-daily-stock-report" onchange="setDailyStockReportEnabled(this.value==='yes');">
          <option value="yes" ${isDailyStockReportEnabled() ? 'selected' : ''}>Yes — email me once a day, automatically</option>
          <option value="no" ${!isDailyStockReportEnabled() ? 'selected' : ''}>No</option>
        </select>
      </div>
    </div>
    <button class="btn btn-ghost btn-sm" onclick="sendDailyStockReportEmail()">Send Full Stock Report Now</button>
  </div>

  <div class="card" style="max-width:560px; margin-bottom:16px;">
    <h3 style="margin-bottom:6px;">📧 Low Stock Email Alerts (Fully Automatic)</h3>
    <p style="font-size:12px; color:var(--text-dim); margin-bottom:12px;">
      Uses a free EmailJS account to send the alert email automatically — no manual
      click needed. Sign up free at <b>emailjs.com</b>, connect your email as a
      "Service", create a "Template" with variables <code>{{salon_name}}</code>,
      <code>{{stock_list}}</code>, <code>{{message}}</code>, <code>{{to_email}}</code>,
      then paste the 3 keys below from your EmailJS dashboard.
    </p>
    <div class="field"><label>Alert Email Address</label><input id="set-alert-email" placeholder="owner@example.com" value="${s.lowStockEmail}" oninput="state.settings.lowStockEmail=this.value;"></div>
    <div class="field-row">
      <div class="field"><label>EmailJS Public Key</label><input id="set-ejs-public" value="${s.emailjsPublicKey}" oninput="state.settings.emailjsPublicKey=this.value;"></div>
      <div class="field"><label>EmailJS Service ID</label><input id="set-ejs-service" value="${s.emailjsServiceId}" oninput="state.settings.emailjsServiceId=this.value;"></div>
    </div>
    <div class="field-row">
      <div class="field"><label>EmailJS Template ID</label><input id="set-ejs-template" value="${s.emailjsTemplateId}" oninput="state.settings.emailjsTemplateId=this.value;"></div>
      <div class="field">
        <label>Auto-alert on new bill</label>
        <select id="set-auto-email-alert" onchange="state.settings.autoEmailAlert=(this.value==='yes');">
          <option value="yes" ${s.autoEmailAlert ? 'selected' : ''}>Yes — send email automatically</option>
          <option value="no" ${!s.autoEmailAlert ? 'selected' : ''}>No — only when I click manually</option>
        </select>
      </div>
    </div>
    <button class="btn btn-ghost btn-sm" onclick="sendLowStockEmailAlert()">Send Test Email Now</button>
  </div>

  <div class="card" style="max-width:560px;">
    <div class="field"><label>Salon / Business Name</label><input id="set-name" value="${s.salonName}"></div>
    <div class="field-row">
      <div class="field"><label>GSTIN Number</label><input id="set-gst" value="${s.gstNumber}"></div>
      <div class="field"><label>Invoice Prefix</label><input id="set-prefix" value="${s.invoicePrefix}"></div>
    </div>
    <div class="field"><label>Phone Number</label><input id="set-phone" value="${s.phone}"></div>
    <div class="field"><label>Address</label><textarea id="set-address" rows="2" style="width:100%; border:1px solid var(--line); border-radius:6px; padding:8px; font-family:inherit;">${s.address}</textarea></div>
    
    <button class="btn btn-gold" style="margin-top:10px;" onclick="saveSettings()">Save Settings</button>
  </div>`;
}

function saveSettings(){
  state.settings.salonName = document.getElementById('set-name').value.trim();
  state.settings.gstNumber = document.getElementById('set-gst').value.trim();
  state.settings.invoicePrefix = document.getElementById('set-prefix').value.trim();
  state.settings.phone = document.getElementById('set-phone').value.trim();
  state.settings.address = document.getElementById('set-address').value.trim();
  state.settings.lowStockEmail = document.getElementById('set-alert-email').value.trim();
  state.settings.emailjsPublicKey = document.getElementById('set-ejs-public').value.trim();
  state.settings.emailjsServiceId = document.getElementById('set-ejs-service').value.trim();
  state.settings.emailjsTemplateId = document.getElementById('set-ejs-template').value.trim();
  state.settings.autoEmailAlert = document.getElementById('set-auto-email-alert').value === 'yes';
  // upsert (not update) — if the settings table has no row with id=1 yet,
  // .update().eq('id',1) silently matches ZERO rows and "succeeds" without
  // actually saving anything. upsert creates the row the first time and
  // updates it every time after, so nothing is ever silently lost.
  dbWrite(sb && sb.from('settings').upsert(dbMap.settingsToRow(state.settings)), 'Save settings');
  logActivity('Updated Settings', `${state.settings.salonName}`);
  showToast('Settings saved successfully!');
  render();
}

function savePins(){
  const adminPin = document.getElementById('set-admin-pin').value.trim();
  const staffPin = document.getElementById('set-staff-pin').value.trim();
  if(!adminPin || !staffPin){ showToast('Both PINs are required'); return; }
  state.settings.adminPin = adminPin;
  state.settings.staffPin = staffPin;
  dbWrite(sb && sb.from('settings').upsert(dbMap.settingsToRow(state.settings)), 'Save PINs');
  logActivity('Updated Login PINs', 'Admin & Staff PIN changed');
  showToast('Login PINs updated');
  render();
}

/* OCR CERTIFICATE PROCESSOR */
function handleGstCertUpload(event){
  const file = event.target.files[0];
  if(!file) return;

  state.isScanning = true;
  render();

  if(typeof Tesseract === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@4/dist/tesseract.min.js';
    script.onload = () => processGstImage(file);
    document.head.appendChild(script);
  } else {
    processGstImage(file);
  }
}

function processGstImage(file){
  Tesseract.recognize(file, 'eng')
    .then(({ data: { text } }) => {
      state.isScanning = false;
      
      const gstRegex = /\b\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}\b/g;
      const matchedGst = text.match(gstRegex);
      if(matchedGst && matchedGst.length > 0) {
        state.settings.gstNumber = matchedGst[0];
      }

      const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
      for(let i=0; i<lines.length; i++){
        if(lines[i].toLowerCase().includes('trade name') || lines[i].toLowerCase().includes('legal name')){
          if(lines[i+1]) state.settings.salonName = lines[i+1].replace(/[^a-zA-Z0-9\s]/g, '');
        }
      }

      showToast('GST Certificate scanned & settings updated!');
      render();
    })
    .catch(err => {
      state.isScanning = false;
      showToast('Scan failed. Please enter details manually.');
      render();
    });
}

/* ============ PREVIEW MODALS ============ */
function renderPreviewModal(){
  if(!state.showPreview) return '';
  const total = grandTotal();
  const sub = cartSubtotal();
  const gst = cartGST();
  const memDisc = membershipDiscountAmount();
  const disc = discountAmount();
  const coup = couponAmount();
  const netTaxableValue = Math.max(0, sub - memDisc - disc - coup);
  const effectiveGstRatePercent = netTaxableValue > 0 ? (gst / netTaxableValue) * 100 : 0;
  const gstSplitPercent = round2(effectiveGstRatePercent / 2);
  const cgst = gst / 2;
  const sgst = gst / 2;
  const memberDisc = memDisc;
  const tip = Number(state.tip) || 0;
  const cust = state.selectedCustomer ? state.customers.find(c=>c.id===state.selectedCustomer) : null;
  const custName = cust ? cust.name : (state.walkInDetails.name || 'Walk-in');
  const custMobile = cust ? cust.mobile : (state.walkInDetails.mobile || '');

  return `
  <div class="modal-backdrop">
    <div class="modal" style="max-width:420px;">
      <div class="modal-head no-print">
        <h3>Print Preview</h3>
        <button class="close-x" onclick="closePreview()">×</button>
      </div>

      <div class="receipt" style="margin-top:10px; border:1px solid #ddd; padding:15px; border-radius:8px;">
        <div class="receipt-head">
          <img class="seal-img" src="logo.png" alt="TARO">
          <div class="receipt-salon">${state.settings.salonName}</div>
          <div style="font-size:11px; color:#666;">${state.settings.address}</div>
          <div style="font-size:11px; color:#666;">GSTIN: ${state.settings.gstNumber}</div>
          <div class="receipt-tag" style="margin-top:5px;">DRAFT INVOICE (not saved yet)</div>
          ${state.isB2BInvoice ? `<div class="receipt-tag" style="margin-top:3px;">B2B TAX INVOICE${state.isIGST ? ' (IGST)' : ''}</div>` : ''}
        </div>

        <div style="font-size:12px; margin:10px 0; border-bottom:1px dashed #ccc; padding-bottom:8px;">
          <div><b>Date:</b> ${new Date().toLocaleString('en-IN')}</div>
          <div><b>Customer:</b> ${custName}${custMobile ? ' (' + custMobile + ')' : ''}</div>
          ${state.isB2BInvoice ? `<div><b>Party GSTIN:</b> ${state.b2bPartyGst || '—'}</div>` : ''}
          <div class="no-print"><b>Stylist/Seller:</b> ${primaryStylist() || 'N/A'}</div>
        </div>

        ${state.cart.map(l=>{
          const svc = l.type==='service' ? state.services.find(s=>s.id===l.refId) : null;
          const codeBit = state.isB2BInvoice && svc && (svc.hsnCode || svc.sacCode)
            ? `<div style="font-size:10px; color:#888;">${svc.hsnCode ? 'HSN: '+svc.hsnCode+' ' : ''}${svc.sacCode ? 'SAC: '+svc.sacCode : ''}</div>` : '';
          return `
          <div class="receipt-line" style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px;">
            <span>${l.name} ${l.qty>1?'× '+l.qty:''}${l.isMemberPrice ? ' <span class="tag tag-gold" style="font-size:9px;">Member Price</span>' : ''}${codeBit}</span>
            <span class="mono">${money(l.price * l.qty)}</span>
          </div>
        `;}).join('')}

        <div style="border-top:1px dashed #ccc; margin-top:8px; padding-top:8px;">
          ${memberDisc > 0 ? `<div class="receipt-total-row" style="display:flex; justify-content:space-between; color:var(--gold);"><span>Membership Discount</span><span class="mono">−${money(memberDisc)}</span></div>` : ''}
          ${disc > 0 ? `<div class="receipt-total-row" style="display:flex; justify-content:space-between; color:var(--sage);"><span>Discount</span><span class="mono">−${money(disc)}</span></div>` : ''}
          ${coup > 0 ? `<div class="receipt-total-row" style="display:flex; justify-content:space-between; color:var(--sage);"><span>Coupon</span><span class="mono">−${money(coup)}</span></div>` : ''}
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>Subtotal</span><span class="mono">${money(netTaxableValue)}</span></div>
          ${(state.isB2BInvoice && state.isIGST) ? `
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>IGST (${round2(effectiveGstRatePercent)}%)</span><span class="mono">${money(gst)}</span></div>
          ` : `
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>CGST (${gstSplitPercent}%)</span><span class="mono">${money(cgst)}</span></div>
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>SGST (${gstSplitPercent}%)</span><span class="mono">${money(sgst)}</span></div>
          `}
          ${tip > 0 ? `<div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>Tip</span><span class="mono">${money(tip)}</span></div>` : ''}
          <div class="receipt-total-row grand" style="display:flex; justify-content:space-between; font-weight:bold; font-size:15px; margin-top:6px;"><span>Total</span><span>${money(total)}</span></div>
        </div>
      </div>

      <div class="no-print" style="display:flex;gap:10px; margin-top:15px;">
        <button class="btn btn-ghost" style="flex:1;" onclick="closePreview()">Back to Edit</button>
      </div>
      <button class="btn btn-gold no-print" style="width:100%; margin-top:8px;" onclick="finalizeBill()">Confirm & Save Invoice</button>
    </div>
  </div>`;
}

function renderBillDetailsModal(){
  if(!state.previewBill) return '';
  const b = state.previewBill;
  const cust = state.customers.find(c=>c.id===b.customerId);
  const subtotal = Number(b.subtotal || 0);
  const totalGst = Number(b.gst || 0);
  const netTaxableValue = Math.max(0, subtotal - Number(b.membershipDiscount||0) - Number(b.discount||0));
  const effectiveGstRatePercent = netTaxableValue > 0 ? (totalGst / netTaxableValue) * 100 : 0;
  const gstSplitPercent = round2(effectiveGstRatePercent / 2);
  const cgst = totalGst / 2;
  const sgst = totalGst / 2;

  return `
  <div class="modal-backdrop">
    <div class="modal" style="max-width:450px;">
      <div class="modal-head no-print">
        <h3>Invoice Details</h3>
        <button class="close-x" onclick="closeBillDetails()">×</button>
      </div>
      
      <div class="receipt" style="margin-top:10px; border:1px solid #ddd; padding:15px; border-radius:8px;">
        <div class="receipt-head">
          <img class="seal-img" src="logo.png" alt="TARO">
          <div class="receipt-salon">${state.settings.salonName}</div>
          <div style="font-size:11px; color:#666;">${state.settings.address}</div>
          <div style="font-size:11px; color:#666;">GSTIN: ${state.settings.gstNumber}</div>
          <div class="receipt-tag" style="margin-top:5px;">INVOICE #${b.id}</div>
          ${b.isB2B ? `<div class="receipt-tag" style="margin-top:3px;">B2B TAX INVOICE${b.isIGST ? ' (IGST)' : ''}</div>` : ''}
        </div>

        <div style="font-size:12px; margin:10px 0; border-bottom:1px dashed #ccc; padding-bottom:8px;">
          <div><b>Date:</b> ${new Date(b.date).toLocaleString('en-IN')}</div>
          <div><b>Customer:</b> ${cust ? cust.name + ' (' + cust.mobile + ')' : 'Walk-in'}</div>
          ${b.isB2B ? `<div><b>Party GSTIN:</b> ${b.partyGst || '—'}</div>` : ''}
          <div class="no-print"><b>Stylist/Seller:</b> ${b.stylist || 'N/A'}</div>
          <div class="no-print"><b>Status:</b> ${b.status}</div>
        </div>

        ${b.items.map(l=>{
          const svc = l.type==='service' ? state.services.find(s=>s.id===l.refId) : null;
          const codeBit = b.isB2B && svc && (svc.hsnCode || svc.sacCode)
            ? `<div style="font-size:10px; color:#888;">${svc.hsnCode ? 'HSN: '+svc.hsnCode+' ' : ''}${svc.sacCode ? 'SAC: '+svc.sacCode : ''}</div>` : '';
          return `
          <div class="receipt-line" style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px;">
            <span>${l.name} ${l.qty>1?'× '+l.qty:''} <small class="no-print" style="color:#777;">(by ${l.sellerName || b.stylist || 'Staff'})</small>${codeBit}</span>
            <span class="mono">${money(l.price * l.qty)}</span>
          </div>`;}).join('')}

        <div style="border-top:1px dashed #ccc; margin-top:8px; padding-top:8px;">
          ${b.membershipDiscount > 0 ? `<div class="receipt-total-row" style="display:flex; justify-content:space-between; color:var(--gold);"><span>Membership Discount</span><span class="mono">−${money(b.membershipDiscount)}</span></div>` : ''}
          ${b.discount > 0 ? `<div class="receipt-total-row" style="display:flex; justify-content:space-between; color:var(--sage);"><span>Discount</span><span class="mono">−${money(b.discount)}</span></div>` : ''}
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>Subtotal</span><span class="mono">${money(netTaxableValue)}</span></div>
          ${b.isIGST ? `
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>IGST (${round2(effectiveGstRatePercent)}%)</span><span class="mono">${money(totalGst)}</span></div>
          ` : `
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>CGST (${gstSplitPercent}%)</span><span class="mono">${money(cgst)}</span></div>
          <div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>SGST (${gstSplitPercent}%)</span><span class="mono">${money(sgst)}</span></div>
          `}
          ${b.tip > 0 ? `<div class="receipt-total-row" style="display:flex; justify-content:space-between;"><span>Tip</span><span class="mono">${money(b.tip)}</span></div>` : ''}
          <div class="receipt-total-row grand" style="display:flex; justify-content:space-between; font-weight:bold; font-size:15px; margin-top:6px;"><span>Total</span><span>${money(b.total)}</span></div>
        </div>
      </div>

      <div class="no-print" style="display:flex; gap:10px; margin-top:15px;">
        <button class="btn btn-ghost" style="flex:1;" onclick="closeBillDetails()">Close</button>
        <button class="btn btn-gold" style="flex:1;" onclick="window.print()">Print Receipt</button>
      </div>
    </div>
  </div>`;
}

/* ============ MAIN RENDER ============ */
function captureFocusState(){
  const el = document.activeElement;
  if(!el || !el.id) return null;
  const tag = (el.tagName||'').toLowerCase();
  if(tag !== 'input' && tag !== 'textarea') return null;
  let start = null, end = null;
  try { start = el.selectionStart; end = el.selectionEnd; } catch(e){}
  return { id: el.id, start, end };
}

function restoreFocusState(snap){
  if(!snap) return;
  const el = document.getElementById(snap.id);
  if(!el) return;
  try {
    el.focus({ preventScroll: true });
    if(snap.start !== null && snap.start !== undefined) el.setSelectionRange(snap.start, snap.end);
  } catch(e){ try { el.focus(); } catch(e2){} }
}

function render(){
  const focusSnap = captureFocusState();

  if(!state.auth.isAuthenticated){
    document.getElementById('app').innerHTML = renderLoginScreen();
    restoreFocusState(focusSnap);
    return;
  }

  // Safety net: if a non-admin somehow has a restricted tab active
  // (e.g. stale state right after logging in as staff), snap back to dashboard.
  if(!isAdmin() && !USER_ALLOWED_TABS.includes(state.tab)){
    state.tab = 'dashboard';
  }

  let mainContent = '';
  if(state.tab==='dashboard') mainContent = renderDashboard();
  else if(state.tab==='billing' || state.tab==='b2b') mainContent = renderBilling();
  else if(state.tab==='appointments') mainContent = renderAppointments();
  else if(state.tab==='customers') mainContent = renderCustomers();
  else if(state.tab==='users') mainContent = renderUsers();
  else if(state.tab==='services') mainContent = renderServices();
  else if(state.tab==='products') mainContent = renderProducts();
  else if(state.tab==='inward') mainContent = renderInward();
  else if(state.tab==='coupons') mainContent = renderCoupons();
  else if(state.tab==='reports') mainContent = renderReports();
  else if(state.tab==='discountReport') mainContent = renderDiscountReport();
  else if(state.tab==='activityLogs') mainContent = renderActivityLogs();
  else if(state.tab==='settings') mainContent = renderSettings();

  document.getElementById('app').innerHTML = `
    ${(state.dbSyncWarnings && state.dbSyncWarnings.length > 0) ? `
    <div style="position:fixed; top:0; left:0; right:0; z-index:200; background:#B5473F; color:#fff; padding:10px 16px; font-size:12.5px; display:flex; align-items:center; gap:12px; box-shadow:0 2px 8px rgba(0,0,0,0.2);">
      <span>⚠️ Database sync failed for: <b>${state.dbSyncWarnings.map(w=>w.label).join(', ')}</b> — data is only saved on this device until this is fixed. Check Supabase table permissions (RLS).${state.dbSyncWarnings[0] ? `<br><small>Reason: ${state.dbSyncWarnings[0].message}</small>` : ''}</span>
      <button onclick="dismissDbSyncWarnings()" style="margin-left:auto; background:rgba(255,255,255,0.2); border:none; color:#fff; padding:4px 10px; border-radius:6px; cursor:pointer; flex-shrink:0;">Dismiss</button>
    </div>
    ` : ''}
    <div class="app ${state.navOpen ? '' : 'nav-closed'}">
      <button class="menu-btn no-print" onclick="toggleNav()" aria-label="Menu"><i></i><i></i><i></i></button>
      <div class="nav-backdrop" onclick="toggleNav()"></div>
      ${renderSidebar()}
      <main>${mainContent}</main>
      ${renderMobileBottomNav()}
    </div>
    ${state.toast ? `<div class="toast">${state.toast}</div>` : ''}
    ${renderPreviewModal()}
    ${renderBillDetailsModal()}
    ${renderModal()}
  `;

  restoreFocusState(focusSnap);
}

// Initial Load — pull live data from Supabase (falls back to the built-in
// demo data above if the DB is unreachable, so the app never breaks).
async function bootstrapApp(){
  const appEl = document.getElementById('app');
  if(appEl && sb){
    appEl.innerHTML = `<div style="display:flex; align-items:center; justify-content:center; height:100vh; font-family:sans-serif; color:#888;">Loading TARO Salon…</div>`;
  }
  await restoreSession();
  if(sb && state.auth.isAuthenticated){
    const ok = await dbLoadAll();
    if(!ok) console.warn('[DB] Falling back to local demo data — check Supabase connection.');
  }
  if(state.auth.isAuthenticated){
    checkDailyStockReport();
    // Logged in from the public website's Login popup? Record it like a normal login.
    try{
      if(sessionStorage.getItem('taro_web_login')){
        sessionStorage.removeItem('taro_web_login');
        logActivity('Login', `${state.auth.user.role} logged in (via website)`);
      }
    }catch(e){}
  }
  render();
}
bootstrapApp();
