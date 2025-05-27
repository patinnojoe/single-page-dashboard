import { PiDotsThreeLight } from 'react-icons/pi';
import { expensesData } from '../utils/constant';

const ExpensesInfo = () => {
  return (
    <div className="d-flex flex-column gap-5">
      {expensesData.map((group, groupIndex) => (
        <aside key={groupIndex}>
          <div className="expenses-summary-header">
            <h4>{group.day}</h4>
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
      <div className="d-flex gap-3 w-100">
        <span className="expenses-sumary-item-indicator" style={{ backgroundColor: indicatorColor }}>
          <Icon />
        </span>
        <div className="w-100">
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="fw-semibold fnt-17">{title}</p>
            <p className="fw-semibold">{amount}</p>
          </div>
          <div className="d-flex gap-2 text-black-alt align-items-center">
            <span>{time}</span>
            <span className="dot-divider"></span>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
