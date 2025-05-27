import { styled } from '@mui/material';

const ExpensesWrapper = styled('div')`
  height: 100%;
  .expenses-detail {
    background-color: #fff;
    height: 100%;
    padding: 3rem;
  }
  .expenses-summary {
    background-color: #f9fafc;
    height: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }
  .expenses-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .expenses-profile > div img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
    margin-left: -10px;
  }
  .expenses-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .expenses-summary-header svg,
  .expenses-profile svg {
    transition: 0.3s;
    cursor: pointer;
  }
  .expenses-summary-header svg:hover,
  .expenses-profile svg:hover {
    fill: rgb(13, 17, 22);
    color: rgb(13, 17, 22);
  }
  .expenses-summary-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .expenses-summary-header {
    border-bottom: 1px solid rgba(231, 230, 230, 0.33);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.5rem;
    margin-bottom: 1rem;
  }
  .expenses-sumary-item-indicator {
    background-color: blue;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    color: #fff;
  }
  .expenses-summary-box {
    background: #edf0f6;
    border-radius: 10px;
    position: relative;
    padding: 2rem 1rem 2rem;
    overflow: visible;
  }

  .expenses-summary-footer-img {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    pointer-events: none;
  }
  .expenses-summary-footer-img img {
    height: 80px;
  }
  .expenses-summary-footer-text {
    margin-top: 3rem;
  }
`;

export default ExpensesWrapper;
