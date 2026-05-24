import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const instanciaCode = `{
  "InstanceId": "i-0123456789abcdef0",
  "InstanceType": "t2.micro",
  "State": "running",
  "PublicIpAddress": "18.222.10.15"
}`;

const securityGroupCode = `{
  "SecurityGroup": "web-server-sg",
  "InboundRules": [
    {
      "Protocol": "tcp",
      "Port": 22,
      "Source": "Mi IP"
    },
    {
      "Protocol": "tcp",
      "Port": 80,
      "Source": "0.0.0.0/0"
    }
  ]
}`;

const sshCode = `ssh -i mi-clave.pem ec2-user@18.222.10.15`;

export const Ec2 = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        EC2
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Amazon EC2 permite crear servidores virtuales en la nube para ejecutar
        aplicaciones, APIs, sitios web, bases de datos o procesos internos.
      </p>

      <h2
        id="que-es-ec2"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es EC2?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        EC2 significa Elastic Compute Cloud. Es un servicio de cómputo que
        permite lanzar máquinas virtuales llamadas instancias.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cada instancia funciona como un servidor donde puedes instalar un
        sistema operativo, ejecutar aplicaciones y configurar servicios según
        las necesidades del proyecto.
      </p>

      <Codeblock code={instanciaCode} title="Instancia EC2" />

      <Note title="Idea principal">
        EC2 es útil cuando necesitas control sobre el servidor, el sistema
        operativo y la configuración del entorno de ejecución.
      </Note>

      <h2
        id="instancias"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Instancias
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una instancia EC2 es una máquina virtual creada dentro de AWS. Puede
        tener distintos tamaños según la cantidad de CPU, memoria, red y
        almacenamiento requerido.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS ofrece diferentes tipos de instancias para usos generales,
        procesamiento intensivo, memoria alta, almacenamiento optimizado o
        cargas específicas.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Uso general</h3>

          <p className="text-sm text-[#757575]">
            Buen equilibrio entre CPU, memoria y red para aplicaciones comunes.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Cómputo</h3>

          <p className="text-sm text-[#757575]">
            Pensadas para tareas que requieren mayor capacidad de procesamiento.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Memoria</h3>

          <p className="text-sm text-[#757575]">
            Útiles para bases de datos o aplicaciones con alto consumo de RAM.
          </p>
        </div>
      </div>

      <h2
        id="amis"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        AMIs
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una AMI, o Amazon Machine Image, es una imagen base utilizada para crear
        una instancia EC2.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        La AMI define el sistema operativo y puede incluir configuraciones,
        paquetes o software preinstalado.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Linux</h3>

          <p className="text-sm text-[#757575]">
            Común para servidores web, APIs, automatizaciones y backend.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Windows Server
          </h3>

          <p className="text-sm text-[#757575]">
            Usado cuando se necesitan aplicaciones o servicios basados en
            Windows.
          </p>
        </div>
      </div>

      <h2
        id="security-groups"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Security Groups
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los Security Groups funcionan como un firewall virtual para controlar el
        tráfico de entrada y salida de una instancia EC2.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Permiten definir qué puertos están abiertos, desde qué direcciones IP se
        puede acceder y qué protocolos están permitidos.
      </p>

      <Codeblock code={securityGroupCode} title="Security Group" />

      <Note title="Buena práctica">
        No abras el puerto SSH 22 a todo internet. Para mayor seguridad, limita
        el acceso SSH únicamente a tu dirección IP.
      </Note>

      <h2
        id="key-pairs"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Key Pairs
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los Key Pairs son pares de claves utilizados para conectarse de forma
        segura a una instancia EC2 mediante SSH.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS guarda la clave pública en la instancia y el usuario conserva la
        clave privada en su computadora. La clave privada no debe compartirse ni
        subirse a repositorios.
      </p>

      <Codeblock code={sshCode} title="Conexión SSH" />

      <Note title="Resumen">
        EC2 permite crear servidores virtuales configurables. Para usarlo de
        forma segura es importante elegir una AMI adecuada, configurar bien el
        tipo de instancia, proteger los Security Groups y guardar correctamente
        la clave privada.
      </Note>
    </DocsLayout>
  );
};
