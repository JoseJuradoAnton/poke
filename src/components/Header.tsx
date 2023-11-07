import styles from "./header.module.css";

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};

const Header = ({query, setQuery}: HeaderProps) => {
  return (
    <div>
      <header className={styles.header}>
        <input
          placeholder="Search a Pokemon"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>
    </div>
  );
};

export default Header;
