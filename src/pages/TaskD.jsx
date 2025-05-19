import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    BarChart, Bar, PieChart,Pie,Cell} from 'recharts';
function TaskD(){
  const mockData = [
    { date: "Mon", done: 5, pending: 3, undone: 2 },
    { date: "Tue", done: 7, pending: 4, undone: 1 },
    { date: "Wed", done: 6, pending: 5, undone: 3 },
    { date: "Thu", done: 9, pending: 3, undone: 2 },
    { date: "Fri", done: 12, pending: 2, undone: 1 },
    { date: "Sat", done: 8, pending: 3, undone: 0 },
    { date: "Sun", done: 10, pending: 1, undone: 1 },
  ];

  const totals = mockData.reduce((acc, cur) => {
    acc.done += cur.done;
    acc.pending += cur.pending;
    acc.undone += cur.undone;
    return acc;
  }, { done: 0, pending: 0, undone: 0 });
  
  const pieData = [
    { name: 'Done', value: totals.done },
    { name: 'Pending', value: totals.pending },
    { name: 'Undone', value: totals.undone },
  ];
  
  const COLORS = ['#82ca9d', '#8884d8', '#ff7300'];
  
  return(


    <>
  <LineChart width={600} height={300} data={mockData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="done" stroke="#82ca9d" />
    <Line type="monotone" dataKey="pending" stroke="#8884d8" />
    <Line type="monotone" dataKey="undone" stroke="#ff7300" />
  </LineChart>


  <BarChart width={600} height={300} data={mockData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="done" fill="#82ca9d" />
  <Bar dataKey="pending" fill="#8884d8" />
  <Bar dataKey="undone" fill="#ff7300" />
</BarChart>

<PieChart width={400} height={300}>
  <Pie
    data={pieData}
    cx="50%"
    cy="50%"
    labelLine={false}
    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
    outerRadius={100}
    dataKey="value"
  >
    {pieData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>
  </>
  )}

  export default TaskD;