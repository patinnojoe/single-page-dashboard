import { Button } from '@mui/material';
import { box, flower, profile1, profile2, profile3 } from '../assets/images';
import { ExpensesInfo, ExpensesTracker } from '../components';
import { ExpensesWrapper } from '../styleWrappers';
import { IoAddCircleOutline } from 'react-icons/io5';
import ExpensesBarChart from '../components/ExpensesBarChart';

const Expenses = () => {
  return (
    <ExpensesWrapper>
      <section className="row h-100">
        <div className="col-lg-8">
          <div className="expenses-detail">
            <header className="expenses-header mb-lg-5 mb-3">
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
            <ExpensesBarChart />

            {/* expenses summary */}
            <ExpensesInfo />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="expenses-summary">
            <header className="mb-lg-5 mb-3">
              <h3>Where your money go?</h3>
            </header>

            {/* expenses tracker */}
            <div className="h-100 d-flex flex-1 w-100 ">
              <ExpensesTracker />
            </div>

            <div className="row">
              <div className="col-lg-12">
                <section className="expenses-summary-footer w-100">
                  <div className="expenses-summary-box">
                    <div className="expenses-summary-footer-img">
                      <img src={box} />
                      <img src={flower} alt="" />
                    </div>
                    <div className="expenses-summary-footer-text">
                      <h3>Save more money</h3>
                      <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    </div>
                    <Button
                      sx={{
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        color: 'white',
                        width: '100%',
                        padding: '1rem',
                        marginTop: '1rem',
                        fontSize: '17px',
                        textAlign: 'center',
                        '&:hover': {
                          backgroundColor: '#333',
                        },
                      }}
                      onclick={() => {
                        console.log('View tips clicked');
                      }}
                    >
                      <span>VIEW TIPS</span>
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ExpensesWrapper>
  );
};

export default Expenses;
