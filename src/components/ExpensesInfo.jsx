import { PiDotsThreeLight } from 'react-icons/pi';
import { expensesData } from '../utils/constant';

const ExpensesInfo = () => {
  return (
    <div className="d-flex flex-column gap-5">
      {expensesData.map((group, groupIndex) => (
        <aside key={groupIndex}>
          <div className="expenses-summary-header">
            <h3>{group.day}</h3>
            <PiDotsThreeLight color="#D2DCE8" fontSize={50} />
          </div>

          <div className="expenses-summary-info">
            {group.expenses.map((expense, idx) => (
              <ExpenseItem key={idx} {...expense} />
            ))}
          </div>
        </aside>
      ))}
    </div>
  );
};

export default ExpensesInfo;

const ExpenseItem = ({ icon: Icon, indicatorColor, title, time, description, amount }) => {
  return (
    <aside className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <span className="expenses-sumary-item-indicator" style={{ backgroundColor: indicatorColor }}>
          <Icon />
        </span>
        <div>
          <h5>{title}</h5>
          <div className="d-flex gap-2 text-black-alt align-items-center">
            <span>{time}</span>
            <span className="dot-divider"></span>
            <span>{description}</span>
          </div>
        </div>
      </div>
      <h5>{amount}</h5>
    </aside>
  );
};
