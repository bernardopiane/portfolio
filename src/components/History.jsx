import React from "react";
import { Divider } from "semantic-ui-react";

const right = { textAlign: "right" };

const pad = { margin: "5em 0 5em 0" };

export default function History() {
  return (
    <>
      <div style={pad}>
        <h2 className="ui center aligned header block">Educação</h2>
        <h3>Universidade Estácio de Sá - Nova Friburgo</h3>
        <h4>Analise e Desenvolvimento de Sistemas</h4>
        <p>
          O curso prepara profissionais para criar, analisar, projetar e
          implementar sistemas computacionais de informação. É formatado com
          disciplinas para desenvolver raciocínio lógico, domínio de linguagens
          de programação e de metodologias de construção de projetos, entre
          outras.
        </p>
        <p style={right}>Janeiro de 2013 - Março de 2016</p>
      </div>
      <div style={pad}>
        <h2 className="ui center aligned header block">
          Experiência Profissional
        </h2>
        <h3>RCPN 1º Distrito de Nova Friburgo/RJ</h3>
        <p>
          Responsável por redigir ofícios, executar determinações de juízes, via
          despacho de documentos, e processos administrativos
        </p>
        <p style={right}>Dezembro de 2014 - Presente</p>
        <Divider></Divider>
        <h3>Desenvolvedor Autônomo</h3>
        <p>
          Desenvolvimento de Websites e Webapps utilizando React, Angular e Vue
        </p>
        <p>
          Desenvolvimento de aplicativos para Android e iOS utilizando Flutter
        </p>
        <p style={right}>2016 - Presente</p>
      </div>
    </>
  );
}
