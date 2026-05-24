import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const helloWorldCode = `public class Main {

    public static void main(String[] args) {
        System.out.println("Hola AWS");
    }
}`;

const arquitecturaCode = `Usuario
   ↓
Frontend / Aplicación
   ↓
AWS Cloud
   ├── EC2
   ├── S3
   ├── RDS
   └── Lambda`;

export const Introduccion = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[0].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Introducción a AWS
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Amazon Web Services (AWS) es una plataforma de servicios en la nube que
        permite crear, desplegar y escalar aplicaciones utilizando
        infraestructura administrada por Amazon.
      </p>

      <h2
        id="que-es-aws"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es AWS?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS ofrece servicios de computación, almacenamiento, redes, bases de
        datos, inteligencia artificial, monitoreo y muchas otras herramientas
        que pueden utilizarse bajo demanda.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En lugar de comprar servidores físicos, AWS permite alquilar recursos
        desde internet y pagar únicamente por el uso realizado.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Escalabilidad
          </h3>

          <p className="text-sm text-[#757575]">
            Los recursos pueden aumentar o disminuir según las necesidades de la
            aplicación.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Disponibilidad
          </h3>

          <p className="text-sm text-[#757575]">
            AWS posee centros de datos distribuidos en múltiples regiones del
            mundo.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Pago por uso
          </h3>

          <p className="text-sm text-[#757575]">
            Solo se paga por los recursos consumidos, sin necesidad de invertir
            en infraestructura propia.
          </p>
        </div>
      </div>

      <h2
        id="cloud-computing"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Cloud Computing
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El cloud computing consiste en acceder a recursos tecnológicos a través
        de internet. Esto incluye servidores, bases de datos, almacenamiento,
        redes y herramientas de desarrollo.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS es uno de los principales proveedores de servicios cloud y permite
        construir aplicaciones modernas sin necesidad de administrar hardware
        físico directamente.
      </p>

      <Codeblock code={arquitecturaCode} title="Arquitectura básica" />

      <Note title="Idea principal">
        AWS permite enfocarse más en el desarrollo de aplicaciones y menos en la
        administración de infraestructura física.
      </Note>

      <h2
        id="modelo-responsabilidad"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Modelo de responsabilidad compartida
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS trabaja bajo un modelo de responsabilidad compartida. Amazon se
        encarga de proteger la infraestructura cloud, mientras que el usuario
        debe configurar correctamente sus aplicaciones, accesos y datos.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            AWS se encarga de
          </h3>

          <ul className="text-sm text-[#757575] space-y-2">
            <li>• Hardware</li>
            <li>• Centros de datos</li>
            <li>• Redes físicas</li>
            <li>• Infraestructura global</li>
          </ul>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            El usuario se encarga de
          </h3>

          <ul className="text-sm text-[#757575] space-y-2">
            <li>• Usuarios y permisos</li>
            <li>• Configuración de servicios</li>
            <li>• Protección de datos</li>
            <li>• Seguridad de aplicaciones</li>
          </ul>
        </div>
      </div>

      <h2
        id="regiones-zonas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Regiones y zonas de disponibilidad
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS divide su infraestructura global en regiones y zonas de
        disponibilidad.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una región representa una ubicación geográfica específica, mientras que
        las zonas de disponibilidad son centros de datos independientes dentro
        de esa región.
      </p>

      <Note title="Ejemplo">
        La región <span className="font-semibold">us-east-1</span> corresponde a
        AWS North Virginia y contiene múltiples zonas de disponibilidad para
        mejorar tolerancia a fallos.
      </Note>

      <h2
        id="casos-de-uso"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Casos de uso de AWS
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS puede utilizarse para aplicaciones web, APIs, almacenamiento de
        archivos, análisis de datos, automatizaciones, inteligencia artificial,
        videojuegos y muchas otras soluciones tecnológicas.
      </p>

      <Codeblock code={helloWorldCode} title="Main.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Muchas aplicaciones modernas utilizan AWS para alojar tanto el frontend
        como el backend y sus bases de datos.
      </p>

      <Note title="Resumen">
        AWS es una plataforma cloud que ofrece servicios escalables y bajo
        demanda para construir aplicaciones modernas de forma flexible, segura y
        distribuida.
      </Note>
    </DocsLayout>
  );
};
