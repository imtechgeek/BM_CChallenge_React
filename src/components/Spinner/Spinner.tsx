import styles from "./Spinner.module.css";

export const Spinner = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loadingSpinner} />
            Loading...

        </div>
    );
};
