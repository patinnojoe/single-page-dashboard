import { expensesTrack } from '../utils/constant';

const ExpensesTracker = () => {
  return (
    <div className="d-flex flex-column gap-4">
      {expensesTrack.map((item, index) => (
        <ExpenseTrackItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ExpensesTracker;

const ExpenseTrackItem = ({ label, amount, progress }) => {
  return (
    <div>
      <aside className="d-flex justify-content-between align-items-center">
        <p>{label}</p>
        <p>{amount}</p>
      </aside>

      <div className="progressbar">
        <span className="indicator" style={{ width: progress }}></span>
      </div>
    </div>
  );
};
