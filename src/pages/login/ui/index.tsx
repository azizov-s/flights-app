import UI from '../../../shared/ui'
import styles from './styles.module.scss'

const LoginPage = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.form}>
					<h2>Enter phone number</h2>
					<input type='text' placeholder='Phone number' />
				</div>
				<div className={styles.btn_stack}>
					<UI.Button text='Login' />
				</div>
			</div>
		</div>
	)
}

export default LoginPage
