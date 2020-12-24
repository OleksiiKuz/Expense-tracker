import React, { useState, useContext } from 'react'
import { GlobalContext } from './context/globalState';

const AddTransaction = () => {

	const { addTransaction } = useContext(GlobalContext);
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);


	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 1000000),
			text,
			amount: +amount
		}

		addTransaction(newTransaction);
		setText('')
		setAmount('')

	}

	return (
		<>
			<h3>Додати нову транзакцію</h3>
			<form onSubmit={onSubmit} >
				<div className="form-control">
					<label htmlFor="text">Текст</label>
					<input type="text" value={text} placeholder="Введіть текст..." onChange={(e) => setText(e.target.value)} />
				</div>
				<div className="htmlForm-control">
					<label htmlFor="amount"
					>Сума <br />
            (мінус - витрати, плюс - дохід)</label>
					<input type="number" value={amount} id="amount" placeholder="Введіть суму..." onChange={(e) => setAmount(e.target.value)} />

				</div>
				<button className="btn">Додати транзакцію</button>
			</form>
		</>
	)
}

export default AddTransaction
