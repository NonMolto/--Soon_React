import styles from './Container.modules.css'

function Container ({ children }) {
    return (
        <section className={styles.container}>
                { children }
        </section>
    )
}

export default Container