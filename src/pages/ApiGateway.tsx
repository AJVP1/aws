import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const apiGatewayCode = `{
  "ApiName": "mi-api",
  "ProtocolType": "HTTP",
  "Endpoint": "https://abc123.execute-api.us-east-1.amazonaws.com"
}`;

const rutaCode = `{
  "RouteKey": "GET /usuarios",
  "Target": "Lambda: listarUsuarios"
}`;

const lambdaIntegrationCode = `exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      mensaje: "Respuesta desde Lambda"
    })
  };
};`;

export const ApiGateway = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        API Gateway
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Amazon API Gateway permite crear, publicar y administrar APIs para
        conectar aplicaciones frontend con servicios backend como AWS Lambda,
        EC2 u otros servicios HTTP.
      </p>

      <h2
        id="que-es-api-gateway"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es API Gateway?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        API Gateway funciona como una puerta de entrada para recibir peticiones
        HTTP y dirigirlas hacia el servicio correspondiente.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Es muy usado en arquitecturas serverless porque permite exponer
        funciones Lambda como endpoints accesibles desde internet.
      </p>

      <Codeblock code={apiGatewayCode} title="API Gateway" />

      <Note title="Idea principal">
        API Gateway permite crear APIs sin administrar servidores web
        directamente.
      </Note>

      <h2
        id="apis-rest"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        APIs REST
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una API REST permite que distintas aplicaciones se comuniquen mediante
        métodos HTTP como GET, POST, PUT, PATCH y DELETE.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En AWS, API Gateway puede recibir esas peticiones y enviarlas a una
        función Lambda, un servicio interno o una URL externa.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">GET</h3>
          <p className="text-sm text-[#757575]">
            Se usa para consultar información.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">POST</h3>
          <p className="text-sm text-[#757575]">
            Se usa para crear nuevos recursos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">DELETE</h3>
          <p className="text-sm text-[#757575]">
            Se usa para eliminar recursos existentes.
          </p>
        </div>
      </div>

      <h2
        id="rutas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Rutas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las rutas definen qué endpoint existe dentro de la API y qué acción debe
        ejecutarse cuando llega una petición.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una ruta combina un método HTTP con una dirección específica, por
        ejemplo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          GET /usuarios
        </code>
        .
      </p>

      <Codeblock code={rutaCode} title="Ruta API Gateway" />

      <h2
        id="integracion-lambda"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Integración con Lambda
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una de las integraciones más comunes es conectar API Gateway con AWS
        Lambda. En este caso, cada petición HTTP ejecuta una función.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Lambda procesa la lógica del backend y devuelve una respuesta que API
        Gateway envía al cliente.
      </p>

      <Codeblock code={lambdaIntegrationCode} title="index.js" />

      <Note title="Ejemplo">
        Un frontend puede enviar una petición a{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          GET /usuarios
        </code>{" "}
        y API Gateway puede ejecutar una función Lambda que consulta usuarios.
      </Note>

      <h2
        id="autenticacion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Autenticación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        API Gateway puede proteger endpoints usando distintos mecanismos de
        autenticación y autorización.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Algunas opciones comunes son IAM, API Keys, Lambda Authorizers y Amazon
        Cognito.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">API Keys</h3>
          <p className="text-sm text-[#757575]">
            Permiten controlar acceso básico y consumo de una API.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Cognito</h3>
          <p className="text-sm text-[#757575]">
            Permite autenticar usuarios mediante login y tokens.
          </p>
        </div>
      </div>

      <Note title="Buenas prácticas">
        Define rutas claras, protege endpoints sensibles, valida los datos que
        recibe la API y revisa los logs para detectar errores.
      </Note>

      <Note title="Resumen">
        API Gateway permite exponer APIs HTTP en AWS y conectarlas con servicios
        backend como Lambda. Es una pieza clave para construir APIs serverless,
        seguras y escalables.
      </Note>
    </DocsLayout>
  );
};
