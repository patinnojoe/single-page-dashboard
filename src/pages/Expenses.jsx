import { profile1, profile2, profile3 } from '../assets/images';
import { ExpensesInfo } from '../components';
import { ExpensesWrapper } from '../styleWrappers';
import { IoAddCircleOutline } from 'react-icons/io5';

const Expenses = () => {
  return (
    <ExpensesWrapper>
      <section className="row h-100">
        <div className="col-lg-8">
          <div className="expenses-detail">
            <header className="expenses-header">
              <aside className="d-flex flex-column gap-1">
                <h1>Expenses</h1>
                <p className="text-black-alt">01 - 25 March, 2020</p>
              </aside>
              <aside className="expenses-profile">
                <div className="d-flex align-items-center">
                  <img src={profile1} alt="" />
                  <img src={profile2} alt="" />
                  <img src={profile3} alt="" />
                </div>
                <IoAddCircleOutline fontSize={50} color="#D2DCE8" />
              </aside>
            </header>

            {/* expenses summary */}
            <ExpensesInfo />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="expenses-summary">
            <header>
              <h3>Where your money go?</h3>
            </header>
          </div>
        </div>
      </section>
    </ExpensesWrapper>
  );
};

export default Expenses;
