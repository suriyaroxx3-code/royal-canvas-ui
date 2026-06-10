export const stats = [
  { label: "Royal Revenue", value: "$248,910", delta: "+12.4%", trend: "up" as const },
  { label: "Active Subjects", value: "18,432", delta: "+3.2%", trend: "up" as const },
  { label: "Court Sessions", value: "1,204", delta: "-1.1%", trend: "down" as const },
  { label: "Treasury Yield", value: "94.8%", delta: "+0.6%", trend: "up" as const },
];

export const revenueSeries = [
  { month: "Jan", revenue: 32, expenses: 18 },
  { month: "Feb", revenue: 41, expenses: 22 },
  { month: "Mar", revenue: 38, expenses: 20 },
  { month: "Apr", revenue: 52, expenses: 28 },
  { month: "May", revenue: 61, expenses: 30 },
  { month: "Jun", revenue: 74, expenses: 36 },
  { month: "Jul", revenue: 82, expenses: 41 },
  { month: "Aug", revenue: 78, expenses: 39 },
  { month: "Sep", revenue: 95, expenses: 44 },
];

export const decrees = [
  { id: "DCR-3041", title: "Trade tariff revision", owner: "Lady Adelaide", status: "Sealed", date: "Mar 12" },
  { id: "DCR-3042", title: "Harvest festival budget", owner: "Sir Aldwin", status: "Pending", date: "Mar 14" },
  { id: "DCR-3043", title: "Northern fort restoration", owner: "Duke Cassian", status: "Review", date: "Mar 15" },
  { id: "DCR-3044", title: "Royal scholarship program", owner: "Dame Iris", status: "Sealed", date: "Mar 17" },
  { id: "DCR-3045", title: "Maritime patrol charter", owner: "Lord Edric", status: "Draft", date: "Mar 18" },
];

export const activities = [
  { who: "Lady Adelaide", what: "sealed a decree", when: "2m ago" },
  { who: "Duke Cassian", what: "left a remark on Northern fort", when: "1h ago" },
  { who: "Dame Iris", what: "approved scholarship funding", when: "3h ago" },
  { who: "Sir Aldwin", what: "drafted the harvest agenda", when: "Yesterday" },
];
