import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  Hotel, 
  BookOpen, 
  Users, 
  Sparkles, 
  ClipboardList, 
  PlayCircle, 
  Ticket, 
  CreditCard,
  Search,
  Bell,
  MessageSquare,
  ChevronRight,
  Plus,
  Star,
  Download,
  MoreVertical,
  Filter,
  CheckCircle2,
  X,
  Send,
  Calendar,
  Smartphone,
  Gavel,
  Waves,
  Zap,
  Menu,
  ChevronDown,
  ArrowRight,
  Check,
  Archive
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const LOGO_URL = "https://admin.tripsxing.com/assets/tripsxing_logo_transparent.png";

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: '#2E3A8C' },
  { id: 'vendors', label: 'Vendor Engagement', icon: Users, color: '#3B82F6' },
  { id: 'onboarding', label: 'Employee Onboarding', icon: ClipboardList, color: '#10B981' },
  { id: 'activities', label: 'Activity Planning', icon: Sparkles, color: '#F59E0B' },
  { id: 'meetings', label: 'Corporate Meetings', icon: Calendar, color: '#EF4444' },
  { id: 'authority', label: 'Decision Authority', icon: Gavel, color: '#6366F1' },
];

const STATS = [
  { label: 'Corporate Rating', value: '4.8', change: '+0.3', color: 'var(--status-coupons)', icon: Star },
  { label: 'Onboarded Employees', value: '842', change: '+12', color: 'var(--status-users)', icon: Users },
  { label: 'App Downloads', value: '1,250', change: '+15%', color: 'var(--status-plans)', icon: Smartphone },
  { label: 'Pending Decisions', value: '5', change: 'Action Required', color: 'var(--status-reels)', icon: Gavel },
];

const VENDORS = [
  { name: 'Elite Fitness', type: 'Fitness Assessment', rating: 4.9, status: 'Active', category: 'Fitness' },
  { name: 'Sky Travel Ltd', type: 'Travel & Logistics', rating: 4.5, status: 'Active', category: 'Travel' },
  { name: 'Mindful Soul', type: 'Mind Wellness Coach', rating: 4.8, status: 'Pending', category: 'Wellness' },
  { name: 'AQUA Adventures', type: 'Sports & Activities', rating: 4.7, status: 'Active', category: 'Sports' },
];

const EMPLOYEES = [
  { name: 'Sarah Wilson', role: 'Director of Ops', onboarding: '100%', status: 'Completed', avatar: 'SW' },
  { name: 'James Chen', role: 'Senior Developer', onboarding: '85%', status: 'In Progress', avatar: 'JC' },
  { name: 'Elena Rodriguez', role: 'HR Manager', onboarding: '60%', status: 'In Progress', avatar: 'ER' },
  { name: 'Marcus Thorne', role: 'Lead Designer', onboarding: '100%', status: 'Completed', avatar: 'MT' },
];

const ACTIVITIES = [
  { 
    name: 'Surfing', 
    img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
    q: 'What is the recommended safety gear for beginners?', 
    reason: 'Builds core strength and mental focus through balance.', 
    icon: <Waves size={16} /> 
  },
  { 
    name: 'Swimming', 
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
    q: 'How to manage breathing during long-distance sessions?', 
    reason: 'Excellent low-impact cardio for full-body wellness.', 
    icon: <Zap size={16} /> 
  },
  { 
    name: 'Mind Wellness', 
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
    q: 'What are effective techniques to prevent workspace burnout?', 
    reason: 'Reduces long-term stress and improves daily productivity.', 
    icon: <Sparkles size={16} /> 
  },
];

const CHAT_MESSAGES = [
  { id: 1, sender: 'Support AI', text: 'Hello! I am your corporate assistant. How can I help with vendor onboarding today?', time: '10:00 AM', type: 'received' },
  { id: 2, sender: 'Admin', text: 'I need to download the list of employees who finished surfing training.', time: '10:05 AM', type: 'sent' },
];

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < Math.floor(rating) ? "#F59E0B" : "transparent"} 
        color={i < Math.floor(rating) ? "#F59E0B" : "#CBD5E1"} 
      />
    ))}
    <span className="rating-text">{rating}</span>
  </div>
);

/* Sub-Components for the Dashboard Overview */
const DashboardVendorSummary = ({ vendors }) => (
  <section className="card vendor-card">
    <div className="card-header">
      <div>
        <h3>Vendor Engagement</h3>
        <p className="card-subtitle">Active fitness and wellness providers</p>
      </div>
    </div>
    <div className="vendor-list">
      {vendors.slice(0, 3).map((vendor, i) => (
        <div key={i} className="vendor-item">
          <div className="vendor-main">
            <div className="vendor-avatar" style={{ background: i % 2 === 0 ? '#2E3A8C' : '#3B82F6' }}>{vendor.name[0]}</div>
            <div className="vendor-details"><span className="name">{vendor.name}</span></div>
          </div>
          <StarRating rating={vendor.rating} />
        </div>
      ))}
    </div>
  </section>
);

const DashboardActivitySummary = ({ activities }) => (
  <section className="card activities-card">
    <div className="card-header">
      <div>
        <h3>Activity Planning</h3>
        <p className="card-subtitle">Surfing, Swimming & Wellness</p>
      </div>
    </div>
    <div className="activity-mini-list">
      {activities.map((act, i) => (
        <div key={i} className="activity-mini-item">
          {act.icon}
          <span>{act.name}</span>
        </div>
      ))}
    </div>
  </section>
);

const DashboardOnboardingSummary = ({ employees }) => (
  <section className="card employee-card">
    <div className="card-header">
      <h3>Employee Onboarding</h3>
    </div>
    <div className="employee-list">
      {employees.slice(0, 3).map((emp, i) => (
        <div key={i} className="employee-item">
          <div className="employee-main">
            <div className="emp-avatar">{emp.avatar}</div>
            <span className="name">{emp.name}</span>
          </div>
          <div className="progress-bg small"><div className="progress-fill" style={{ width: emp.onboarding }} /></div>
        </div>
      ))}
    </div>
  </section>
);

const DashboardMeetingSummary = () => (
  <section className="card meeting-card">
    <div className="meeting-header">
      <div className="meeting-icon"><Calendar size={18} /></div>
      <div className="meeting-title">
        <h3>Next Meeting</h3>
        <span>March 12, 11:15 AM</span>
      </div>
    </div>
  </section>
);

/* Full Detailed Views */
const VendorEngagementView = ({ vendors, onAddVendor }) => (
  <div className="detail-view">
    <div className="view-header">
      <h2>Vendor Engagement</h2>
      <button className="primary-button" onClick={() => onAddVendor(true)}>
        <Plus size={18} /> New Vendor
      </button>
    </div>
    <div className="vendor-grid">
      {vendors.map((vendor, i) => (
        <div key={i} className="vendor-card card">
          <div className="vendor-badge">{vendor.type}</div>
          <div className="vendor-main">
            <div className="v-avatar">{vendor.name.charAt(0)}</div>
            <h3>{vendor.name}</h3>
          </div>
          <StarRating rating={vendor.rating} />
          <div className="vendor-stats">
            <div className="v-stat"><span>Status</span><strong className={vendor.status.toLowerCase()}>{vendor.status}</strong></div>
            <div className="v-stat"><span>Type</span><strong>{vendor.category}</strong></div>
          </div>
          <button className="outline-button-full mt-4">Manage Provider</button>
        </div>
      ))}
    </div>
  </div>
);

const EmployeeOnboardingView = ({ employees, onOnboard }) => (
  <div className="detail-view">
    <div className="view-header">
      <h2>Employee Onboarding</h2>
      <div className="view-actions">
        <button className="icon-button-outlined"><Download size={18} /> Export List</button>
        <button className="primary-button" onClick={() => onOnboard(true)}>
          <Plus size={18} /> Onboard New
        </button>
      </div>
    </div>
    <div className="card full-table-card">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Onboarding Progress</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i}>
              <td className="emp-cell"><div className="emp-avatar">{emp.avatar}</div>{emp.name}</td>
              <td>{emp.role}</td>
              <td className="progress-cell">
                <div className="progress-group">
                  <div className="progress-bg"><div className="progress-fill" style={{ width: emp.onboarding }} /></div>
                  <span className="progress-text">{emp.onboarding}</span>
                </div>
              </td>
              <td><span className={`status-pill ${emp.status.replace(/\s+/g, '-').toLowerCase()}`}>{emp.status}</span></td>
              <td><button className="text-button">Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="app-download-section mt-8">
      <h3>Distribution Channels</h3>
      <div className="platform-cards">
        <div className="platform-card">
          <Smartphone size={24} />
          <div>
            <h4>iOS Application</h4>
            <p className="v-downloads">750 Total Downloads</p>
            <p className="v-info">v2.4.0 - Active</p>
          </div>
          <button className="outline-button">Copy Link</button>
        </div>
        <div className="platform-card">
          <Smartphone size={24} />
          <div>
            <h4>Android Application</h4>
            <p className="v-downloads">500 Total Downloads</p>
            <p className="v-info">v2.4.0 - Active</p>
          </div>
          <button className="outline-button">Copy Link</button>
        </div>
      </div>
    </div>
  </div>
);

const ActivityPlanningView = ({ activities }) => (
  <div className="detail-view">
    <div className="view-header">
      <h2>Activity Planning</h2>
    </div>
    <div className="activity-list-full">
      {activities.map((act, i) => (
        <div key={i} className="activity-detail-item card">
          <div className="activity-image-side"><img src={act.img} alt={act.name} /></div>
          <div className="activity-content-side">
            <div className="act-header">
              {act.icon}
              <h3>{act.name}</h3>
            </div>
            <div className="q-unit active-q mt-4">
              <strong>Preset Engagement Question</strong>
              <p>"{act.q}"</p>
            </div>
            <div className="q-unit mt-4">
              <strong>Strategic Objective</strong>
              <p>{act.reason}</p>
            </div>
            <div className="act-actions mt-6">
              <button className="primary-button">Launch Activity Plan</button>
              <button className="outline-button">Edit Questions</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CorporateMeetingsView = ({ onSchedule }) => (
  <div className="detail-view">
    <div className="view-header">
      <h2>Corporate Meetings</h2>
      <button className="primary-button" onClick={() => onSchedule(true)}>
        <Calendar size={18} /> Schedule Meeting
      </button>
    </div>
    <div className="meeting-grid">
      <div className="card next-meeting-large">
        <div className="meeting-badge large">Upcoming Priority</div>
        <div className="meeting-main-info">
          <div className="m-icon-large"><Calendar size={32} /></div>
          <div>
            <h3>Final Requirements Meeting</h3>
            <p className="phase">Phase: Target Activities & Planning</p>
          </div>
        </div>
        <div className="meeting-meta-grid">
          <div className="m-meta"><span>Date</span><strong>March 12, 2026</strong></div>
          <div className="m-meta"><span>Time</span><strong>11:15 AM - 1:00 PM</strong></div>
          <div className="m-meta"><span>Location</span><strong>Tripsxing Executive Wing</strong></div>
          <div className="m-meta"><span>Authority</span><strong>C-Level Presence</strong></div>
        </div>
        <button className="primary-button-full mt-6">Confirm Attendance</button>
      </div>
      <div className="meeting-history">
        <div className="card">
          <h3>Recent Meetings</h3>
          <div className="history-list">
            <div className="history-item"><span>Feb 28</span><p>Initial Architecture Sync</p><strong>Completed</strong></div>
            <div className="history-item"><span>Feb 24</span><p>Vendor Compatibility Audit</p><strong>Completed</strong></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [message, setMessage] = useState('');
  const [showAddVendor, setShowAddVendor] = useState(false);
  const [showOnboardEmployee, setShowOnboardEmployee] = useState(false);
  const [showScheduleMeeting, setShowScheduleMeeting] = useState(false);

  return (
    <div className={`app-layout ${!isSidebarOpen ? 'sidebar-collapsed' : ''}`}>
      {/* Top Navigation Tier 1: Blue Bar */}
      <header className="top-header-blue">
        <div className="header-container">
          <div className="header-logo-section">
            <img src={LOGO_URL} alt="Tripsxing Logo" className="header-logo" />
            <span className="app-badge">Corporate Edition</span>
          </div>
          <div className="header-user-section">
            <div className="user-info-text">
              <span className="user-name">Admin User</span>
              <span className="user-role">Corporate Manager</span>
            </div>
            <div className="orange-avatar">a</div>
            <ChevronDown size={14} className="user-chevron" />
          </div>
        </div>
      </header>

      {/* Top Navigation Tier 2: Breadcrumb Bar */}
      <div className="sub-header-white">
        <div className="sub-header-left">
          <button className="menu-toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size={20} />
          </button>
          <div className="breadcrumb-path">
            <span className="bc-home">Home</span>
            <span className="bc-divider">/</span>
            <span className="bc-active">
              {NAV_ITEMS.find(n => n.id === activeNav)?.label || 'Dashboard'}
            </span>
          </div>
        </div>
        <div className="sub-header-right">
          <button className="action-button-text">
            <Bell size={18} />
          </button>
          <button className="action-button-text">
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className="main-wrapper">
        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside 
              className="sidebar"
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: 'tween' }}
            >
              <nav className="nav-menu">
                <div className="nav-group-label">Corporate Management</div>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                    onClick={() => setActiveNav(item.id)}
                  >
                    <item.icon className="nav-icon" size={20} />
                    <span>{item.label}</span>
                    {activeNav === item.id && <motion.div layoutId="activeNav" className="active-indicator" />}
                  </button>
                ))}
              </nav>

              <div className="sidebar-footer">
                <div 
                  className={`authority-badge clickable ${activeNav === 'authority' ? 'active' : ''}`}
                  onClick={() => setActiveNav('authority')}
                >
                  <Gavel size={16} />
                  <div className="badge-text">
                    <span className="badge-title">Decision Authority</span>
                    <span className="badge-status">Authorized Access</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="content-scroll">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNav}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeNav === 'dashboard' && (
                  <div className="dashboard-grid">
                    <section className="stats-row">
                      {STATS.map((stat, i) => (
                        <div 
                          key={i} 
                          className="stat-card clickable"
                          onClick={() => {
                            if (stat.label === 'App Downloads') setActiveNav('onboarding');
                            if (stat.label === 'Pending Decisions') setActiveNav('meetings');
                            if (stat.label === 'Onboarded Employees') setActiveNav('onboarding');
                          }}
                        >
                          <div className="stat-icon-wrapper" style={{ backgroundColor: stat.color + '15', color: stat.color }}>
                            <stat.icon size={22} />
                          </div>
                          <div className="stat-info">
                            <p className="stat-label">{stat.label}</p>
                            <h3 className="stat-value">{stat.value}</h3>
                          </div>
                          <div className="stat-trend positive">{stat.change}</div>
                        </div>
                      ))}
                    </section>
                    <div className="main-sections">
                      <div className="section-column">
                        <DashboardVendorSummary vendors={VENDORS} />
                        <DashboardActivitySummary activities={ACTIVITIES} />
                      </div>
                      <div className="section-column">
                        <DashboardOnboardingSummary employees={EMPLOYEES} />
                        <DashboardMeetingSummary />
                      </div>
                    </div>
                  </div>
                )}

                {activeNav === 'vendors' && <VendorEngagementView vendors={VENDORS} onAddVendor={setShowAddVendor} />}
                {activeNav === 'onboarding' && <EmployeeOnboardingView employees={EMPLOYEES} onOnboard={setShowOnboardEmployee} />}
                {activeNav === 'activities' && <ActivityPlanningView activities={ACTIVITIES} />}
                {activeNav === 'meetings' && <CorporateMeetingsView onSchedule={setShowScheduleMeeting} />}
                {activeNav === 'authority' && <DecisionAuthorityView />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Chat Sidebar */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.aside 
              className="chat-sidebar"
              initial={{ x: 350 }}
              animate={{ x: 0 }}
              exit={{ x: 350 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="chat-header">
                <div className="chat-title">
                  <MessageSquare size={20} />
                  <div>
                    <h3>Employee Support</h3>
                    <span className="chat-status">Always Active</span>
                  </div>
                </div>
                <button className="close-btn" onClick={() => setIsChatOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="chat-messages">
                {CHAT_MESSAGES.map((msg) => (
                  <div key={msg.id} className={`message-bubble ${msg.type}`}>
                    <p className="msg-text">{msg.text}</p>
                    <span className="msg-time">{msg.time}</span>
                  </div>
                ))}
              </div>
              <div className="chat-input-wrapper">
                <div className="chat-input">
                  <input 
                    type="text" 
                    placeholder="Type employee support query..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="send-btn"><Send size={18} /></button>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {!isChatOpen && (
          <button className="chat-toggle" onClick={() => setIsChatOpen(true)}>
            <MessageSquare size={24} />
            <span className="ping" />
          </button>
        )}

        {/* Dynamic Navigation View Modals */}
        <AnimatePresence>
          {showAddVendor && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="modal-container" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}>
                <div className="modal-header">
                  <div className="modal-title-group">
                    <div className="modal-icon-cir"><Hotel size={20} /></div>
                    <div><h3>Add New Vendor</h3><p>Register a new service provider</p></div>
                  </div>
                  <button className="close-modal" onClick={() => setShowAddVendor(false)}><X size={20} /></button>
                </div>
                <div className="modal-body">
                  <div className="user-form-grid">
                    <div className="input-group full-width"><label>Company Name <span className="req">*</span></label><input type="text" placeholder="e.g. Skyline Logistics" /></div>
                    <div className="input-group"><label>Service Category <span className="req">*</span></label><select className="full-select"><option>Fitness</option><option>Travel</option><option>Wellness</option><option>Sports</option></select></div>
                    <div className="input-group"><label>Rating (Initial)</label><input type="number" step="0.1" placeholder="4.5" /></div>
                    <div className="input-group"><label>Contact Person</label><input type="text" placeholder="John Smith" /></div>
                    <div className="input-group"><label>Registration ID</label><input type="text" placeholder="REG-2024-001" /></div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="outline-button" onClick={() => setShowAddVendor(false)}>Cancel</button>
                  <button className="primary-button" onClick={() => setShowAddVendor(false)}>Register Vendor</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showOnboardEmployee && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="modal-container" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}>
                <div className="modal-header">
                  <div className="modal-title-group">
                    <div className="modal-icon-cir"><Users size={20} /></div>
                    <div><h3>Onboard New Employee</h3><p>Initialize onboarding process</p></div>
                  </div>
                  <button className="close-modal" onClick={() => setShowOnboardEmployee(false)}><X size={20} /></button>
                </div>
                <div className="modal-body">
                  <div className="user-form-grid">
                    <div className="input-group"><label>First Name <span className="req">*</span></label><input type="text" placeholder="Sarah" /></div>
                    <div className="input-group"><label>Last Name <span className="req">*</span></label><input type="text" placeholder="Wilson" /></div>
                    <div className="input-group full-width"><label>Job Title <span className="req">*</span></label><input type="text" placeholder="Senior Project Manager" /></div>
                    <div className="input-group"><label>Department</label><select className="full-select"><option>Operations</option><option>Human Resources</option><option>Engineering</option><option>Marketing</option></select></div>
                    <div className="input-group"><label>Onboarding Level</label><select className="full-select"><option>Standard</option><option>Express</option><option>Executive</option></select></div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="outline-button" onClick={() => setShowOnboardEmployee(false)}>Cancel</button>
                  <button className="primary-button" onClick={() => setShowOnboardEmployee(false)}>Start Onboarding</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showScheduleMeeting && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="modal-container" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}>
                <div className="modal-header">
                  <div className="modal-title-group">
                    <div className="modal-icon-cir"><Calendar size={20} /></div>
                    <div><h3>Schedule Corporate Meeting</h3><p>Plan a new priority meeting</p></div>
                  </div>
                  <button className="close-modal" onClick={() => setShowScheduleMeeting(false)}><X size={20} /></button>
                </div>
                <div className="modal-body">
                  <div className="user-form-grid">
                    <div className="input-group full-width"><label>Meeting Title <span className="req">*</span></label><input type="text" placeholder="Architecture Sync" /></div>
                    <div className="input-group"><label>Date <span className="req">*</span></label><input type="date" /></div>
                    <div className="input-group"><label>Priority</label><select className="full-select"><option>Low</option><option>Medium</option><option>High</option><option>Critical (C-Level)</option></select></div>
                    <div className="input-group"><label>Start Time</label><input type="time" /></div>
                    <div className="input-group"><label>End Time</label><input type="time" /></div>
                    <div className="input-group full-width"><label>Location</label><input type="text" placeholder="Executive Conference Room B" /></div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="outline-button" onClick={() => setShowScheduleMeeting(false)}>Cancel</button>
                  <button className="primary-button" onClick={() => setShowScheduleMeeting(false)}>Schedule</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const DecisionAuthorityView = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddRole, setShowAddRole] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [roleForm, setRoleForm] = useState({ name: '', desc: '' });

  const authUsers = [
    { name: 'tester1', email: 'tester1@gmail.com', role: 'Super Admin', status: 'Active', avatar: 'T' }
  ];

  const authRoles = [
    { name: 'Super Admin', desc: 'System Administrator with full access to all modules', userCount: 1, type: 'System' }
  ];

  return (
    <div className="detail-view">
      <div className="view-header">
        <div className="auth-tab-toggle">
          <button 
            className={`toggle-btn ${activeTab === 'overview' || activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users size={16} /> Users
          </button>
          <button 
            className={`toggle-btn ${activeTab === 'roles' ? 'active' : ''}`}
            onClick={() => setActiveTab('roles')}
          >
            <CreditCard size={16} /> Roles
          </button>
        </div>
        <div className="view-actions">
          <button 
            className="primary-button" 
            onClick={() => activeTab === 'roles' ? setShowAddRole(true) : setShowAddUser(true)}
          >
            <Plus size={18} /> {activeTab === 'roles' ? 'Add Role' : 'Add User'}
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="authority-grid">
          <div className="card authority-status-card">
            <div className="auth-id-tag">CORPORATE ID: TRP-9920-X</div>
            <div className="auth-user-large">
              <div className="orange-avatar large">A</div>
              <div>
                <h3>Admin User</h3>
                <p>Verified Corporate Manager</p>
              </div>
            </div>
            <div className="auth-stats-row">
              <div className="auth-stat"><span>Verified Since</span><strong>Jan 2026</strong></div>
              <div className="auth-stat"><span>Clearance</span><strong>Level 5 (Elite)</strong></div>
              <div className="auth-stat"><span>Trust Score</span><strong>99%</strong></div>
            </div>
            <div className="auth-permissions-list mt-8">
              <h4>Authorized Decision Powers</h4>
              <div className="perm-item"><CheckCircle2 size={14} className="success" /> <span>Finalize Vendor Contracts</span></div>
              <div className="perm-item"><CheckCircle2 size={14} className="success" /> <span>Assign Employee Roles</span></div>
              <div className="perm-item"><CheckCircle2 size={14} className="success" /> <span>Approve Activity Budgets</span></div>
              <div className="perm-item"><CheckCircle2 size={14} className="success" /> <span>Moderate Meeting Logistics</span></div>
            </div>
          </div>
          <div className="section-column">
            <div className="card log-card">
              <h3>Recent Authority Actions</h3>
              <div className="auth-log-list">
                <div className="log-item">
                  <div className="log-icon green"><Gavel size={14} /></div>
                  <div><p>Approved <strong>Elite Fitness</strong> provider</p><span>2 hours ago</span></div>
                </div>
                <div className="log-item">
                  <div className="log-icon blue"><Users size={14} /></div>
                  <div><p>Onboarded 12 new employees</p><span>Yesterday</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="card full-table-card">
          <table className="employee-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role(s)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {authUsers.map((user, i) => (
                <tr key={i}>
                  <td className="emp-cell">
                    <div className="emp-avatar gray">{user.avatar}</div>
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td><span className="role-pill-sec"><CreditCard size={12} /> {user.role}</span></td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><button className="icon-btn-gray"><MoreVertical size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-footer">
            <span>Showing 1 of 1 users</span>
            <div className="pagination">
              <span>Per page: </span>
              <select><option>5</option></select>
              <div className="page-nav">
                <button disabled>{"<<"}</button>
                <button disabled>{"<"}</button>
                <button className="active">1</button>
                <button disabled>{">"}</button>
                <button disabled>{">>"}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'roles' && (
        <div className="roles-grid">
          {authRoles.map((role, i) => (
            <div key={i} className="card role-display-card">
              <div className="role-main-info">
                <div className="role-icon-box">SA</div>
                <div className="role-text-box">
                  <h3>{role.name}</h3>
                  <p>{role.desc}</p>
                </div>
              </div>
              <div className="role-meta-grid">
                <div className="role-meta-item">
                  <span>USERS</span>
                  <strong>{role.userCount}</strong>
                </div>
                <div className="role-meta-item">
                  <span>TYPE</span>
                  <strong>{role.type}</strong>
                </div>
              </div>
              <div className="role-card-footer">
                <span className="system-tag">System Role</span>
                <button className="text-button">View</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Role Modal Overlay */}
      <AnimatePresence>
        {showAddRole && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-container role-modal"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="modal-header">
                <div className="modal-title-group">
                  <div className="modal-icon-cir"><CreditCard size={20} /></div>
                  <div>
                    <h3>Add New Role</h3>
                    <p>Create a new role with permissions</p>
                  </div>
                </div>
                <button className="close-modal" onClick={() => setShowAddRole(false)}><X size={20} /></button>
              </div>

              <div className="modal-steps">
                <div className={`step ${modalStep === 1 ? 'active' : 'completed'}`}>
                  <span className="step-cir">
                    {modalStep > 1 ? <Check size={16} /> : <CheckCircle2 size={16} />}
                  </span>
                  <span className="step-label">Role Details</span>
                </div>
                <div className="step-line" />
                <div className={`step ${modalStep === 2 ? 'active' : ''}`}>
                  <span className="step-cir"><Sparkles size={16} /></span>
                  <span className="step-label">Permissions</span>
                </div>
              </div>

              <div className="modal-body">
                {modalStep === 1 ? (
                  <div className="role-form">
                    <div className="input-group">
                      <label>Role Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Reservation Manager" 
                        value={roleForm.name}
                        onChange={(e) => setRoleForm({...roleForm, name: e.target.value})}
                      />
                    </div>
                    <div className="input-group">
                      <label>Role Description</label>
                      <textarea 
                        rows="4" 
                        placeholder="Describe the responsibilities of this role..."
                        value={roleForm.desc}
                        onChange={(e) => setRoleForm({...roleForm, desc: e.target.value})}
                      />
                    </div>
                  </div>
                ) : (
                  <table className="perm-table">
                    <thead>
                      <tr>
                        <th>ALL</th>
                        <th>MODULE</th>
                        <th>VIEW</th>
                        <th>CREATE</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="group-row"><td colSpan="6">COMMAND CENTER</td></tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                          <div className="mod-cell">
                            <strong>Dashboards</strong>
                            <div className="mod-pills">
                              <span>Bookings</span><span>Front Desk</span><span>Inventory</span><span>Owner</span>
                            </div>
                          </div>
                        </td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                      <tr className="group-row"><td colSpan="6">FRONT DESK</td></tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                          <div className="mod-cell">
                            <strong>Front Desk Operations</strong>
                            <div className="mod-pills">
                              <span>Check In</span><span>Check Out</span><span>Folio</span><span>Night Audit</span>
                            </div>
                          </div>
                        </td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>

              <div className="modal-footer">
                {modalStep === 1 ? (
                  <>
                    <button className="outline-button" onClick={() => setShowAddRole(false)}>Cancel</button>
                    <button className="primary-button" onClick={() => setModalStep(2)}>
                      Next Step <ArrowRight size={18} />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="outline-button" onClick={() => setModalStep(1)}>Back</button>
                    <button className="primary-button" onClick={() => {
                        setShowAddRole(false);
                        setModalStep(1);
                      }}>
                      Save Role <CheckCircle2 size={18} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Add User Modal Overlay */}
      <AnimatePresence>
        {showAddUser && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-container user-modal"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="modal-header">
                <div className="modal-title-group">
                  <div className="modal-icon-cir"><Users size={20} /></div>
                  <div>
                    <h3>Add New User</h3>
                    <p>Create a new user account</p>
                  </div>
                </div>
                <button className="close-modal" onClick={() => setShowAddUser(false)}><X size={20} /></button>
              </div>

              <div className="modal-body">
                <div className="user-form-grid">
                  <div className="input-group">
                    <label>First Name <span className="req">*</span></label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="input-group">
                    <label>Last Name <span className="req">*</span></label>
                    <input type="text" placeholder="Doe" />
                  </div>
                  <div className="input-group full-width">
                    <label>Email Address <span className="req">*</span></label>
                    <input type="email" placeholder="john.doe@gromaxx.com" />
                  </div>
                  <div className="input-group">
                    <label>Phone Number</label>
                    <div className="phone-input-row">
                      <select className="country-select">
                        <option>PL +48</option>
                        <option>US +1</option>
                      </select>
                      <input type="text" placeholder="XXX XXX XXX" />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="label-row">
                      <label>Assign Role <span className="req">*</span></label>
                      <button className="quick-add-btn">+ Quick Add</button>
                    </div>
                    <select className="full-select">
                      <option>Select a role</option>
                      <option>Super Admin</option>
                      <option>Manager</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Status</label>
                    <select className="full-select">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="outline-button" onClick={() => setShowAddUser(false)}>Cancel</button>
                <button className="primary-button" onClick={() => setShowAddUser(false)}>
                   <Archive size={18} /> Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
