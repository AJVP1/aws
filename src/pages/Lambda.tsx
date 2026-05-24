import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const lambdaCode = `{
  "FunctionName": "procesarImagen",
  "Runtime": "nodejs20.x",
  "Handler": "index.handler",
  "MemorySize": 128,
  "Timeout": 10
}`;

const funcionCode = `exports.handler = async (event) => {
  console.log("Evento recibido:", event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      mensaje: "Hola desde AWS Lambda"
    })
  };
};`;

const eventoCode = `{
  "source": "aws.s3",
  "detail-type": "Object Created",
  "bucket": "mi-bucket",
  "object": "imagenes/logo.png"
}`;

export const Lambda = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Lambda
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        AWS Lambda permite ejecutar código sin administrar servidores. Solo
        necesitas subir una función, definir cuándo debe ejecutarse y AWS se
        encarga de la infraestructura.
      </p>

      <h2
        id="que-es-lambda"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es AWS Lambda?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Lambda es un servicio de cómputo serverless que ejecuta funciones en
        respuesta a eventos. Puede usarse para APIs, automatizaciones,
        procesamiento de archivos, tareas programadas o integración entre
        servicios.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En lugar de crear y mantener un servidor, defines una función y AWS la
        ejecuta cuando ocurre el evento configurado.
      </p>

      <Codeblock code={lambdaCode} title="Función Lambda" />

      <Note title="Idea principal">
        Lambda es útil cuando necesitas ejecutar código bajo demanda sin
        administrar máquinas virtuales.
      </Note>

      <h2
        id="serverless"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Serverless
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Serverless no significa que no existan servidores, sino que el
        desarrollador no necesita administrarlos directamente.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS se encarga de aprovisionar recursos, escalar la ejecución y mantener
        la infraestructura necesaria para correr el código.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Sin servidores
          </h3>

          <p className="text-sm text-[#757575]">
            No necesitas crear ni mantener instancias EC2.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Escalado automático
          </h3>

          <p className="text-sm text-[#757575]">
            AWS escala la ejecución según la cantidad de eventos recibidos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Pago por ejecución
          </h3>

          <p className="text-sm text-[#757575]">
            Se paga principalmente por invocaciones y tiempo de ejecución.
          </p>
        </div>
      </div>

      <h2
        id="funciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Funciones
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una función Lambda contiene el código que se ejecuta cuando ocurre un
        evento. Cada función tiene un runtime, un handler, memoria asignada,
        timeout y permisos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        El handler es el punto de entrada de la función. Recibe el evento,
        ejecuta la lógica definida y devuelve una respuesta.
      </p>

      <Codeblock code={funcionCode} title="index.js" />

      <Note title="Ejemplo">
        Una función Lambda puede procesar una imagen cada vez que se sube un
        archivo nuevo a un bucket S3.
      </Note>

      <h2
        id="eventos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Eventos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Lambda se ejecuta a partir de eventos. Estos eventos pueden venir de
        servicios como API Gateway, S3, EventBridge, DynamoDB, SQS o CloudWatch.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        El evento contiene información sobre lo que ocurrió y permite que la
        función tome decisiones según esos datos.
      </p>

      <Codeblock code={eventoCode} title="Evento S3" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">API Gateway</h3>

          <p className="text-sm text-[#757575]">
            Ejecuta una función cuando llega una petición HTTP.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">S3</h3>

          <p className="text-sm text-[#757575]">
            Ejecuta una función cuando se crea, modifica o elimina un objeto.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">EventBridge</h3>

          <p className="text-sm text-[#757575]">
            Permite ejecutar funciones con eventos programados o reglas.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">SQS</h3>

          <p className="text-sm text-[#757575]">
            Procesa mensajes desde una cola de forma desacoplada.
          </p>
        </div>
      </div>

      <h2
        id="logs-cloudwatch"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Logs con CloudWatch
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Lambda se integra con CloudWatch Logs para registrar información de cada
        ejecución. Esto permite revisar errores, tiempos de ejecución y mensajes
        generados con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          console.log
        </code>
        .
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los logs son importantes para depurar funciones y entender qué ocurre
        durante una ejecución.
      </p>

      <Note title="Buenas prácticas">
        Configura correctamente el timeout, asigna solo la memoria necesaria,
        usa roles IAM con permisos mínimos y revisa los logs en CloudWatch para
        detectar errores.
      </Note>

      <Note title="Resumen">
        AWS Lambda permite ejecutar funciones bajo demanda sin administrar
        servidores. Es ideal para APIs, automatizaciones, eventos de S3, colas,
        tareas programadas y arquitecturas serverless.
      </Note>
    </DocsLayout>
  );
};
