import React, { useContext } from 'react';
import { GlobalContext } from './context/globalState';

const Transaction = ({ transaction }) => {

	const { deleteTransaction } = useContext(GlobalContext)

	const sign = transaction.amount < 0 ? '' : '+';
	const amountClass = transaction.amount < 0 ? 'minus' : 'plus';
	return (
		<li className={amountClass}>
			<div className="text">{transaction.text}</div>
			<span>{sign}{transaction.amount}$</span><button className="delete-btn"
				onClick={() => deleteTransaction(transaction.id)}>x</button>
		</li>
	)
}

export default Transaction
