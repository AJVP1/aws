import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const frontendDeployCode = `{
  "Servicio": "S3 + CloudFront",
  "Contenido": "HTML, CSS, JavaScript",
  "Dominio": "www.miapp.com",
  "SSL": true
}`;

const backendDeployCode = `{
  "Servicio": "EC2",
  "Runtime": "Node.js / Java / Python",
  "Puerto": 8080,
  "BaseDeDatos": "RDS"
}`;

const serverlessDeployCode = `{
  "API": "API Gateway",
  "Backend": "Lambda",
  "BaseDeDatos": "DynamoDB o RDS",
  "Logs": "CloudWatch"
}`;

export const Deploy = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[3].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Deploy
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        En AWS existen varias formas de desplegar aplicaciones. La elección
        depende del tipo de proyecto, el nivel de control necesario, el costo y
        la facilidad de mantenimiento.
      </p>

      <h2
        id="opciones-deploy"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Opciones de deploy
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS ofrece distintas alternativas para publicar aplicaciones frontend,
        backend, APIs, bases de datos y arquitecturas serverless.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        No existe una única forma correcta de hacer deploy. Una aplicación
        simple puede usar S3 y CloudFront, mientras que una aplicación más
        compleja puede combinar EC2, RDS, VPC, Load Balancer y CloudWatch.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Frontend estático
          </h3>
          <p className="text-sm text-[#757575]">
            Ideal para sitios HTML, CSS, JavaScript, React o Vite.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Backend tradicional
          </h3>
          <p className="text-sm text-[#757575]">
            Útil para APIs desplegadas en servidores como EC2.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Serverless</h3>
          <p className="text-sm text-[#757575]">
            Permite ejecutar APIs y procesos sin administrar servidores.
          </p>
        </div>
      </div>

      <h2
        id="deploy-frontend"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Deploy de frontend
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para aplicaciones frontend estáticas, una opción común es subir los
        archivos generados por el build a un bucket S3 y distribuirlos con
        CloudFront.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        S3 almacena los archivos del sitio y CloudFront funciona como CDN para
        entregar el contenido de forma rápida y segura.
      </p>

      <Codeblock code={frontendDeployCode} title="Frontend deploy" />

      <Note title="Ejemplo">
        En una aplicación React o Vite, primero se ejecuta el build y luego se
        sube la carpeta generada, normalmente{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">dist</code>
        , a S3.
      </Note>

      <h2
        id="deploy-backend"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Deploy de backend
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para backends tradicionales, una opción es usar EC2. En este caso, se
        crea una instancia, se instala el entorno necesario y se ejecuta la
        aplicación en el servidor.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        El backend puede conectarse a una base de datos en RDS y exponerse a
        internet mediante un dominio, un Load Balancer o un proxy como Nginx.
      </p>

      <Codeblock code={backendDeployCode} title="Backend deploy" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">EC2</h3>
          <p className="text-sm text-[#757575]">
            Da mayor control sobre el servidor y la configuración.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">RDS</h3>
          <p className="text-sm text-[#757575]">
            Permite usar una base de datos administrada por AWS.
          </p>
        </div>
      </div>

      <h2
        id="dominios-ssl"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Dominios y SSL
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para usar un dominio propio, normalmente se configura DNS para apuntar
        hacia CloudFront, un Load Balancer o una IP pública según la
        arquitectura utilizada.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        SSL permite servir la aplicación mediante HTTPS. En AWS, los
        certificados pueden gestionarse con AWS Certificate Manager.
      </p>

      <Note title="Recomendación">
        Para frontends estáticos, la combinación S3 + CloudFront + Certificate
        Manager es una opción común para servir contenido con HTTPS.
      </Note>

      <h2
        id="buenas-practicas-deploy"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Buenas prácticas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un buen deploy debe ser seguro, repetible, monitoreable y fácil de
        mantener. Para eso conviene automatizar pasos, proteger credenciales,
        usar variables de entorno y revisar logs.
      </p>

      <Codeblock code={serverlessDeployCode} title="Deploy serverless" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Automatizar</h3>

          <p className="text-sm text-[#757575]">
            Usa pipelines o scripts para evitar deploys manuales repetitivos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Monitorear</h3>

          <p className="text-sm text-[#757575]">
            Revisa métricas y logs con CloudWatch después del despliegue.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Proteger secretos
          </h3>

          <p className="text-sm text-[#757575]">
            No guardes claves ni contraseñas directamente en el código.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Separar entornos
          </h3>

          <p className="text-sm text-[#757575]">
            Mantén configuraciones distintas para desarrollo, testing y
            producción.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        En AWS puedes desplegar frontend con S3 y CloudFront, backend con EC2 o
        arquitecturas serverless con Lambda y API Gateway. Un buen deploy debe
        cuidar seguridad, monitoreo, automatización y costos.
      </Note>
    </DocsLayout>
  );
};
