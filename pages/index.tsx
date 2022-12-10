import classes from '../styles/utils.module.css';

export default function Home() {
  return (
    <header className={classes.textAlignCenter}>
      <h1>NextJS</h1>
      <h2>
        TypeScript, MUI, Jest, React Testing Library, Axios, SWR, and more!
      </h2>
    </header>
  );
}
