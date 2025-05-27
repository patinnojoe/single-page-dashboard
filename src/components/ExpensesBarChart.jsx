import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { expensesTrack } from '../utils/constant';

const ExpensesBarChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={expensesTrack}
          barCategoryGap={40} // controls spacing between bars (reduce to thin them)
        >
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="amount"
            fill="#60A5FA" // single light blue color for all bars
            barSize={30} // controls individual bar thickness
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensesBarChart;
