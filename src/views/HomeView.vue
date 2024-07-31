<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue'
import ThemeComponent from '@/components/ThemeComponent.vue'
import BlockLineComponent from '@/components/BlockLineComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import BlockLineBlueComponent from '@/components/BlockLineBlueComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import BlockLineGreenComponent from '@/components/BlockLineGreenComponent.vue'
import BlockLineBrownComponent from '@/components/BlockLineBrownComponent.vue'
import BlockLineWhiteComponent from '@/components/BlockLineWhiteComponent.vue'
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-row justify-center space-x-6 px-[100px]">
    <ThemeComponent title="Visitas de Estudo Orientadas" background-color="bg-[#F67080]" target="#visitas"/>
    <ThemeComponent title="Atividades Dinamizadas na Sala de Aula" background-color="bg-[#DADAF7]" target="#atividades"/>
    <ThemeComponent title="Materiais de Empréstimo" background-color="bg-[#E4E2AA]" target="#materiais"/>
    <ThemeComponent title="Outras Ofertas" background-color="bg-[#5A7CB0]" target="#ofertas"/>
  </div>
  <div class="flex flex-col justify-center bg-[#F67080] mt-10 px-[160px] pt-16" id="visitas">
    <h2 class="text-white text-center text-7xl">Visitas de Estudo Orientadas</h2>
    <BlockLineComponent />
    <CardComponent title="A MINHA PRIMEIRA VISITA" destination="Destinatários"
                   text="Pré-escolar, 1º e 2º ciclo e outros grupos."
                   body="Apresentação do Arquivo e Biblioteca da Madeira (ABM), com destaque para a leitura e exploração de livros infantojuvenis."
                   color="text-white" />
    <BlockLineComponent />
    <CardComponent title="CONHECER E UTILIZAR A BIBLIOTECA" destination="Destinatários" text="1º e 2º ciclos."
                   body="Apresentação do ABM, das Salas de Leitura (infantojuvenil e geral), com destaque para a exploração da base de dados da biblioteca."
                   :inverse="true" color="text-white" />
    <BlockLineComponent />
    <CardComponent title="CONHECER E UTILIZAR O ARQUIVO" destination="Destinatários"
                   text="3º ciclo, ensino secundário, cursos profissionais, EFA-básico e secundário, cursos universitários e outros grupos."
                   body="Apresentação da instituição com percurso pela Sala de Leitura do Arquivo e Reservados e Áreas Técnicas, incluindo a de Preservação, Conservação e Restauro."
                   color="text-white" />
    <BlockLineComponent />
    <CardComponent title="Visita ABM" destination="Destinatários"
                   text="3º ciclo, ensino secundário, cursos profissionais, EFAS, cursos universitários e outros grupos."
                   body="Apresentação da instituição, Sala de Leitura Geral, Sala Infantojuvenil e o circuito de integração, tratamento e disponibilização da documentação arquivística e bibliográfica."
                   :inverse="true" color="text-white" />
    <div class="mb-32"></div>
  </div>
  <div class="flex flex-col justify-center bg-[#DADAF7] px-[160px] pt-16" id="atividades">
    <h2 class="text-gas text-center text-7xl">Atividades dinamizadas na sala de aula</h2>
    <BlockLineBlueComponent />
    <CardComponent
      title="A BIBLIOTECA VAI À ESCOLA"
      destination="Destinatários"
      text=" Pré-escolar, 1º e 2º ciclos."
      body=" Apresentação da instituição, com destaque para a leitura de histórias em voz alta e dinamização de atividades."
      :inverse="true"
      color="text-gas" />
    <BlockLineBlueComponent class="mb-4" />
  </div>
  <div class="flex flex-col justify-center bg-[#BBBAF5] px-[160px] pt-16">
    <div class="flex flex-col px-10 space-x-6 ">
      <h3 class="uppercase text-5xl mt-8 text-right">MALETAS PEDAGÓGICAS</h3>
      <h4 class="text-2xl">
        <span class="font-bold">Destinatários:</span>
        2º e 3 º ciclos, EFA-básico.
      </h4>
      <h4 class="text-2xl">
        <span class="font-bold">Participantes:</span>
        1 turma.
      </h4>
      <h4 class="text-2xl">
        <span class="font-bold">Duração:</span>
        90 minutos.
      </h4>
      <div class="grid grid-cols-4 gap-4 mt-4">
        <div class="flex flex-col">
          <img src="../assets/ilustracoes/color-test.jpg" alt="color test" class="rounded-2xl">
          <span class="text-center">Máquina do tempo - Tursimo</span>
        </div>
        <div class="flex flex-col">
          <img src="../assets/ilustracoes/color-test.jpg" alt="color test" class="rounded-2xl">
          <span class="text-center">B de Bibliófagos! Insetos que danificam a documentação</span>
        </div>
        <div class="flex flex-col">
          <img src="../assets/ilustracoes/color-test.jpg" alt="color test" class="rounded-2xl">
          <span class="text-center">Salette - Poesia Visual Portuguesa</span>
        </div>
        <div class="flex flex-col">
          <img src="../assets/ilustracoes/color-test.jpg" alt="color test" class="rounded-2xl">
          <span class="text-center">Genealogia e História da Família</span>
        </div>
      </div>
      <p class="text-center mt-4 text-gas"><span class="font-bold">Nota:</span> À exceção da maleta <span
        class="font-bold">Salette</span>, as restantes maletas podem ser requisitadas pelo período máxido de <span
        class="font-bold">30 dias.</span></p>
      <ButtonComponent title="INSCREVER" class="mt-4" color="bg-gas text-white" />
    </div>
    <BlockLineBlueComponent class="mb-4" />
  </div>
  <div class="flex flex-col justify-center bg-[#DADAF7] px-[160px] pt-16">
    <div class="flex flex-col px-10 space-x-6 ">
      <h3 class="uppercase text-5xl mt-8 text-right">Cadernos Pedagógicos</h3>
      <h4 class="text-2xl">
        <span class="font-bold">Destinatários:</span>
        2º e 3 º ciclos, EFA-básico.
      </h4>
      <p class="mt-4 text-3xl tracking-wide">
        Pequenos dossiês intitulados: “O meu concelho ...” que divulgam aspetos relacionados com os concelhos da RAM.
        Cada caderno revela um tema destaque sobre o concelho em causa, desenvolvido sob a forma de texto dramático.
        Já se encontram disponíveis para a dinamização os seguintes cadernos:
      </p>
      <ul class="list-disc mt-4 pl-8">
        <li>O meu concelho... <span class="font-bold">Calheta;</span></li>
        <li>O meu concelho... <span class="font-bold">Funchal;</span></li>
        <li>O meu concelho... <span class="font-bold">Machico;</span></li>
        <li>O meu concelho... <span class="font-bold">Ponta do Sol;</span></li>
        <li>O meu concelho... <span class="font-bold">Porto Moniz;</span></li>
        <li>O meu concelho... <span class="font-bold">Porto Santo;</span></li>
        <li>O meu concelho... <span class="font-bold">Ribeira Brava;</span></li>
        <li>O meu concelho... <span class="font-bold">S. Vicente.</span></li>
      </ul>
      <ButtonComponent title="INSCREVER" class="mt-4" color="bg-gas text-white" />
    </div>
    <BlockLineBlueComponent class="mb-4" />
  </div>
  <div class="flex flex-col justify-center bg-[#BBBAF5] px-[160px] pt-16">
    <div class="flex flex-col px-10 space-x-6">
      <h3 class="uppercase text-5xl ">Escrita Criativa</h3>
      <div class="flex flex-row">
        <div class="flex flex-col">
          <p class="text-3xl mt-4 tracking-wide">Série de atividades que visam promover o gosto pela escrita,
            abordando-a de forma lúdica.</p>
          <ul class="list-disc mt-4 pl-8">
            <li>Oficina do Conto<span class="font-bold"> (2º e 3º ciclos e EFA-básico);</span></li>
            <li>Oficina de Poesia Visual <span class="font-bold">(1º, 2º, 3º ciclos e EFA-básico);</span></li>
            <li>Oficina de Escrita Criativa: Pós de Escrita<span class="font-bold">(4º ano de escolaridade);</span></li>
          </ul>

          <div class="p-6 bg-[#1B1957] bg-opacity-35 mt-4 w-fit">
            <h4 class="text-2xl">
              <span class="font-bold">Turno:</span>
              Manhã ou tarde ( conforme a disponibilidade )
            </h4>
            <h4 class="text-2xl">
              <span class="font-bold">Participantes:</span>
              1 turma.
            </h4>
            <h4 class="text-2xl">
              <span class="font-bold">Duração:</span>
              90 minutos.
            </h4>
          </div>
        </div>
        <div class="flex w-1/2">
          <img src="@/assets/ilustracoes/color-test.jpg" alt="">
        </div>
      </div>
      <ButtonComponent title="INSCREVER" class="mt-4" color="bg-gas text-white" />
    </div>
    <BlockLineBlueComponent class="mb-4" />
  </div>
  <div class="flex flex-col justify-center bg-[#DADAF7] px-[160px] pt-16">
    <div class="flex flex-col px-10 space-x-6 ">
      <h3 class="uppercase text-5xl mt-8 ">Palestras</h3>
      <h4 class="text-2xl mt-6">
        <span class="font-bold">Destinatários:</span>
        2º e 3 º ciclos, EFA-básico.
      </h4>
      <ul class="list-disc mt-4 pl-8">
        <li>Palestra de divulgação ABM</li>
      </ul>
      <p class="text-lg mt-4">Apresentação da instituição, acervo e serviços do ABM.</p>
      <p class="text-lg mt-4 font-bold">Palestra de divulgação ABM</p>
      <ul class="list-disc mt-4 pl-8">
        <li>ABM;</li>
        <li>Arquivo como Ferramenta de pesquisa;</li>
        <li>As Levadas;</li>
        <li>As principais instituições de beneficência da Madeira - (séc. XVI -XIX);</li>
        <li>Bombardeamento da Madeira durante a 1ª Guerra Mundial;</li>
        <li>Crianças Expostas;</li>
        <li>Emigração, Turismo e Comunidade;</li>
        <li>Cinema na Madeira. <span class=" text-lg font-extrabold text-[#0500F7]">Novo!</span></li>
      </ul>
      <ButtonComponent title="INSCREVER" class="mt-4 mb-4" color="bg-gas text-white" />
    </div>
  </div>
  <div class="flex flex-col justify-center bg-[#E4E2AA] px-[160px] pt-16" id="materiais">
    <h2 class="text-center text-7xl text-white">Materiais de Empréstimo</h2>
    <BlockLineGreenComponent />
    <div class="flex flex-row mt-8 items-center">
      <div class="flex w-1/2">
        <img src="@/assets/ilustracoes/maleta.svg" alt="">
      </div>
      <div class="flex flex-col w-2/3 space-y-4 items-center h-full justify-between text-[#398186]">
        <h3 class="uppercase text-5xl mb-16">MALETAS PEDAGÓGICAS</h3>
        <h4 class="text-2xl">
          <span class="font-bold">Destinatários:</span>
          2º e 3 º ciclos, EFA-básico.
        </h4>
        <p class="text-3xl">
          Atividades apresentadas em formato de “mala” portátil. Cada maleta contém atividades interativas relativas a
          diversas temáticas:
          <ul class="list-disc text-3xl">
            <li>Máquina do tempo - Turismo;</li>
            <li>B de Bibliófagos! - Insetos que danificam a documentação;</li>
            <li>Genealogia e História da Família.</li>
          </ul>
        </p>
        <p class="text-2xl">
          <span class="font-bold">Nota:</span> Estas maletas podem ser requisitadas pelo período máxido de <span
          class="font-bold">30 dias.</span>
        </p>
        <ButtonComponent title="INSCREVER" class="mt-4" color="bg-[#949C39] text-white mt-6" />
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center bg-[#FFF] px-[160px]">
    <h2 class="text-center text-7xl text-white">Materiais de Empréstimo</h2>
    <BlockLineGreenComponent />
    <div class="flex flex-col px-10 text-[#6D750F]">
      <h3 class="uppercase text-5xl ">Cinema no Arquivo <span class="font-bold text-[#398186]">NOVO!</span></h3>
      <h4 class="text-2xl mt-4">
        <span class="font-bold">Destinatários:</span>
        2º e 3 º ciclos, EFA-básico.
      </h4>
      <p>Dispomos de um set que contém um dispositivo de memória USB com a versão do filme a estudar, os respetivo
        cartaz e o guia de exploração.</p>

      <img src="@/assets/ilustracoes/filme1.png" alt="filme 1">
      <img src="@/assets/ilustracoes/filme2.png" alt="filme 2">
      <ButtonComponent title="INSCREVER" color="bg-white text-[#949C39] drop-shadow-2xl mb-4" />
    </div>
  </div>
  <div class="flex flex-col justify-center bg-[#E4E2AA] px-[160px] ">
    <BlockLineGreenComponent />
    <div class="flex flex-col px-10 space-x-6">
      <div class="flex flex-col px-10 text-[#398186]">
        <h3 class="uppercase text-5xl text-right ">Roteiro</h3>
        <img src="@/assets/ilustracoes/roteiro.svg" alt="roteiro" class="mt-8 mb-8">
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center bg-[#F4F1EC] px-[160px]">
    <BlockLineBrownComponent />
    <div class="flex flex-col px-10 space-x-6 text-[#6D750F]">
      <div class="flex flex-row justify-around">
        <div class="flex flex-col">
          <h3 class="uppercase text-5xl mt-8 ">Exposições Itinerantes</h3>
          <h4 class="text-2xl mt-6">
            <span class="font-bold">Destinatários:</span>
            escolas bibliotecas e outros agentes culturais.
          </h4>
          <p class="text-lg mt-4 font-bold">Festividades:</p>
          <ul class="list-disc pl-8">
            <li>Os sabores do Natal Madeirense;</li>
            <li>A véspera de Natal na Madeira;</li>
          </ul>
          <p class="text-lg mt-4 font-bold">Literatura:</p>
          <ul class="list-disc pl-8">
            <li>La Fontaine e a fábula no Arquivo e Biblioteca da Madeira;</li>
            <li>Maria do Carmo Rodrigues e a Escrita de receção infantojuvenil;</li>
            <li>Emily Brontë: 200 anos (1818-1848);</li>
            <li>Jane Austen;</li>
            <li>Raul Brandão: 150 Anos de nascimento;</li>
            <li>Shakespeare: Génio da palavra;</li>
            <li>Cem anos de Solidão;</li>
            <li>Isabel Minhós Martins;</li>
            <li>Ana Pessoa;</li>
            <li>Odette de Saint-Maurice;</li>
            <li>Herman Melville: Autor de Moby Dick;</li>
            <li>Sophia de Mello Breyner Andresen – Poeta nos gestos e na vida.</li>
          </ul>
          <p class="text-lg mt-4 font-bold">Arquivo e Biblioteca:</p>
          <ul class="list-disc pl-8">
            <li>Do livro impresso ao e-book;</li>
          </ul>
          <p class="text-lg mt-4 font-bold">Personalidades:</p>
          <ul class="list-disc pl-8">
            <li>Joel Serrão: centenário do nascimento do historiador</li>
          </ul>
          <p class="text-lg mt-4 font-bold">Generalidades:</p>
          <ul class="list-disc pl-8">
            <li>Vinho Madeira: história, factos e curiosidades;</li>
            <li>As epidemias na Madeira (1521-1911);</li>
          </ul>
        </div>
        <div>
          <img src="@/assets/ilustracoes/imagem_2.png" class="h-[800px]">
        </div>
      </div>
      <ButtonComponent title="INSCREVER" class="mt-4 mb-4" color="bg-white text-[#949C39]" />
    </div>
  </div>
  <div class="flex flex-col justify-center bg-[#5A7CB0] px-[160px]" id="ofertas">
    <h2 class="text-center text-7xl text-white mt-8">Outras Ofertas</h2>
    <BlockLineWhiteComponent />
    <div class="flex flex-col px-10 space-x-6 text-[#FFF]">
      <p class="text-5xl text-center mt-4">Formação de utilizadores - aprender a pesquisar na base de dados da
        Biblioteca (Prisma) e do Arquivo (Archeevo)</p>
      <div class="flex flex-row mt-8 space-x-6">
        <div class="w-2/3">
          <img src="@/assets/ilustracoes/color-test.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center items-start">
          <h4 class="text-2xl">
            <span class="font-bold">Destinatários:</span>
            Alunos do ensino secundário, universitário e leitores do ABM
          </h4>
          <h4 class="text-2xl">
            <span class="font-bold">Calendarização:</span>
            janeiro a setembro manhã ou tarde (conforme a disponibilidade).
          </h4>
          <h4 class="text-2xl">
            <span class="font-bold">Número de Participantes:</span>
            10
          </h4>
          <h4 class="text-2xl">
            <span class="font-bold">Duração:</span>
            4 horas.
          </h4>
        </div>
      </div>
      <ButtonComponent title="Enviar email para: seec.abm.srtc@madeira.gov.pt"
                       color="bg-[#34568A] text-white drop-shadow-2xl mt-4" />
    </div>
    <BlockLineWhiteComponent />
    <div class="flex flex-col px-10 space-x-6 text-[#FFF]">
      <p class="text-5xl text-center mt-4">
        Atividades dirigidas a associações culturais e recreativas, centros comunitários, universidades seniores,
        famílias, parcerias e outros organismos.</p>
      <div class="flex flex-row mt-8 space-x-6">
        <div class="w-2/3">
          <img src="@/assets/ilustracoes/color-test.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center items-start w-1/2">
          <h4 class="text-2xl">
            <span class="font-bold">Falares da Ilha:</span>
            Regionalismos e expressões do Arquipélago da Madeira;
          </h4>
          <h4 class="text-2xl">
            <span class="font-bold">Em busca dos nomes perdidos:</span>
            Atividade prática de genealogia e História da Família;
          </h4>
          <h4 class="text-2xl">
            <span class="font-bold">Lugares do nosso tempo:</span>
            Atividade prática de genealogia e História da Família;
          </h4>
          <h4 class="text-2xl">
            <span class="font-bold">Visita ABM</span>
          </h4>
          <h4 class="text-2xl">
            <span class="font-bold">Seniores com “Histórias:</span>
            Sessão de contos, cujo objetivo é utilizar a leitura e a escuta para preservar as funções cognitivas do
            idoso e, desta forma, contribuir para a sua saúde mental e promover a interação social;
          </h4>
        </div>
      </div>
      <div class="flex flex-row mt-8 items-center justify-between">
        <div class="flex w-1/2">
          <p>Palestra dinâmica: As crianças abandonadas: Os expostos.</p>
        </div>
        <div class="flex w-2/3">
          <img src="@/assets/ilustracoes/color-test.jpg" alt="">
        </div>
      </div>
      <ButtonComponent title="Enviar email para: seec.abm.srtc@madeira.gov.pt"
                       color="bg-[#34568A] text-white drop-shadow-2xl mt-8" />
    </div>
    <BlockLineWhiteComponent class="mb-8" />
  </div>
  <div class="flex flex-col justify-center bg-[#7F99C0] px-[160px] pt-8">
    <div class="flex flex-col px-10 space-x-6 text-[#FFF]">
      <p class="text-4xl text-center mt-4">Para mais informações contactar o Serviço Educativo pelo email: <br>seec.abm.srtc@madeira.gov.pt
        ou através do telefone 291 145 310 Ext. 5
        <br>(Ana Cristina Figueira, Marcela Costa)</p>
      <div class="flex justify-center items-center mt-16">
        <p class="text-center">
          Secretaria Regional do Turismo e Cultura Direção Regional do Arquivo e Biblioteca da Madeira <br>
          Direção de Serviços de Comunicação e Acesso <br>
          Tel. 291 145 310 Ext. 457439/457453/457402 (Serviço Educativo) <br>
          Email: seec.abm.srtc@madeira.gov.pt <br>
          site: abm.madeira.gov.
        </p>
      </div>
    </div>
  </div>
</template>