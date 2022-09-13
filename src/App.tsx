import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import styled from "@emotion/styled";
import ButtonMain from "./components/Button/Button";
import Preloader from "./components/Preloader/Preloader";
import CardMain from "./components/Card/Card";
import { IData } from "./models/models";

const defaultData: IData = {
  title: `Hi, I'm Olga 
  <Frontend developer/>`,
  text: 'Stack:',
  stack: [
    { id: 0, title: 'React / React Hooks'},
    { id: 1, title: 'Redux / Redux Toolkit'},
    { id: 2, title: 'Typescript / Javascript'},
    { id: 3, title: 'HTML / CSS'},
    { id: 4, title: 'Styled components / SCSS / Emotion'},
    { id: 5, title: 'MUI / Bootstrap'},
    { id: 6, title: 'Storybook'},
    { id: 7, title: 'REST API / GraphQL + Apollo'},
    { id: 8, title: 'Git / Jira / Figma'},
  ]
}

function App() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IData>();

  useEffect(() => {
    if(data) {
      setLoading(false);
    };
  }, [data])

  const dataLoad = async() => {
    setLoading(true);
    await setTimeout(() => {
      setData(defaultData);
    }, 3000);
  }

  return (
    <Container maxWidth="sm">
      <SApp>
          { 
            loading ? <Preloader/> 
              : data ? <CardMain data={data}/>
              : <ButtonMain dataLoad={dataLoad}/> 
          }
      </SApp>
    </Container>
  );
}

const SApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vw;
`

export default App;
