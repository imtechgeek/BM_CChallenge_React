import { ChangeEventHandler } from "react";
import styles from "./Search.module.css";

interface Props {
    handleChange: ChangeEventHandler;
}
export const Search = ({ handleChange }: Props) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    className={styles.input}
                    onChange={handleChange}
                    placeholder="Search Products"
                    aria-label="search products"
                    type="search"
                />
            </div>
        </div>
    );
};
