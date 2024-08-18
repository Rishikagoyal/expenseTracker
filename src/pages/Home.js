import React,{useEffect} from 'react';
import Card from '../components/Card/Card';
import {useState} from 'react';
import styles from './Home.module.css';
import Chart from '../components/PieChart/Chart';

function Home(){

    const[isOpenBalance,setIsOpenBalance]=useState(true);
    const[isExpense,setIsExpense]=useState(true);
    const[walletBal,setWalletBal]=useState(4500);
    const[expense,setExpense]=useState(500);
    const [categorySpends, setCategorySpends]=useState({food:0,entertainment:0,travel:0});
    const[categoryCount,setCategoryCount]=useState({food:0,entertainment:0,travel:0});
    const details = [
        { name: 'Food', value: categorySpends.food },
        { name: 'Entertainment', value: categorySpends.entertainment},
        { name: 'Travel', value: categorySpends.travel },
      ];

    

    return(
        <>
        <div className={styles.wrapper}>
        <Card title="Wallet Balance" money={walletBal} buttonText="+ Add Income" buttonType="primary" handleClick={()=>setIsOpenBalance(prevIsOpenBalance => !prevIsOpenBalance)}/>
        <Card title="Expenses" money={expense} buttonText="+ Add expense" buttonType="secondary"  handleClick={()=>setIsExpense((prevIsExpense => !prevIsExpense))} success={false}/>
       
        </div>

        <Chart data={details} />
        
        </>
    )
}

export default Home;