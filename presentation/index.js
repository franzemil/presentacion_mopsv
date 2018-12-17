// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Layout,
  CodePane,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import ComputerBackground from "../components/ComputerBackground";
import rrhhImage from '../assets/rrhh/rrhh_one.png';
import arquitectura from  '../assets/arquitectura.png';
import issues from  '../assets/issues.png';

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#0a3d62",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={1400} contentHeight={900} >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          INTRODUCCION
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>Arquitectura</Heading>
          <Image src={require('../assets/mono.png')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={require('../assets/micro.png')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps>TECNOLÓGIAS</Heading>
          <List textColor="primary" >
            <ListItem>API-REST/GRAPHQL</ListItem>
            <ListItem>POSTGRESQL</ListItem>
            <ListItem>PYTHON (Django, Flask), JAVA (Spring Boot)</ListItem>
            <ListItem>JAVASCRIPT (NodeJs, React, VueJS)</ListItem>
            <ListItem>DOCKER</ListItem>
            <ListItem>TDD</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>HERRAMIENTAS</Heading>
          <List>
            <ListItem>GIT/GITLAB</ListItem>
            <ListItem>VIM</ListItem>
            <ListItem>POSTMAN</ListItem>
            <ListItem>VSCODE/ATOM/SUBLIMETEXT</ListItem>
            <ListItem>PYCHARM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>MAYORES PROBLEMAS</Heading>
          <List>
            <ListItem>TRABAJO COLABORATIVO</ListItem>
            <ListItem>METODOLOGIAS DE DESARROLLO</ListItem>
            <ListItem>FUERTE DEPENDENCIA TECNOLOGICA</ListItem>
          </List>
        </Slide>
        
        <Slide>
          <Heading size={3} textColor="secondary" caps>COMENCEMOS POR GIT</Heading>
          <Text>
            La herramienta de versionamiento de codigo
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary" caps>SISTEMA COLABORATIVOS BASADOS ENT GIT</Heading>
          <Text>
            Son aplicaciones que utilizan git.
          </Text>
          <List>
            <ListItem>GITLAB</ListItem>
            <ListItem>GITHUB</ListItem>
            <ListItem>COGS</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary" caps>INSTALACIÓN Y CONFIGURACIÓN</Heading>
          <CodePane textSize={25} source={`
apt-get install git
git config --global user.name="franzemil"
git config --global user.mail="franzemil@gmail.com"
          `} />
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary" caps>COMANDOS BÁSICOS</Heading>
          <CodePane textSize={25} source={`
git init

git add -A 
git commit 

git clone [repo]
git remote add [nombre_rama_remota] [url_repositorio_remoto]
git pull [nombre_rama_remota] [nombre_rama_local]
git push [nombre_rama_remota] [nombre_rama_local]

git checkout -b [nombre_rama_local]
git checkout [nombre_rama_local]
git merge [nombre_rama_local]
          `} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" caps>GESTION DE ISSUES</Heading>
          <Text>Herramienta para el seguimiento de tareas.</Text>
          <Image src={require('../assets/issues.png')} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" caps>TDD</Heading>
          <Text>Desarrollo Orientado a Pruebas</Text>
          <Image src={require('../assets/tdd.png')}/>
        </Slide>
      </Deck>
    );
  }
}
