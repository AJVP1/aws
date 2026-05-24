import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const vpcCode = `{
  "VpcId": "vpc-0123456789abcdef0",
  "CidrBlock": "10.0.0.0/16",
  "State": "available"
}`;

const subnetCode = `{
  "SubnetId": "subnet-0123456789abcdef0",
  "VpcId": "vpc-0123456789abcdef0",
  "CidrBlock": "10.0.1.0/24",
  "AvailabilityZone": "us-east-1a"
}`;

const routeTableCode = `{
  "RouteTable": "public-route-table",
  "Routes": [
    {
      "Destination": "0.0.0.0/0",
      "Target": "Internet Gateway"
    }
  ]
}`;

export const Vpc = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[3].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        VPC
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Amazon VPC permite crear una red privada dentro de AWS para organizar y
        controlar cómo se comunican los recursos cloud.
      </p>

      <h2
        id="que-es-vpc"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es una VPC?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        VPC significa Virtual Private Cloud. Es una red virtual aislada dentro
        de AWS donde puedes lanzar recursos como instancias EC2, bases de datos
        RDS, balanceadores de carga y otros servicios.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Dentro de una VPC puedes definir rangos de IP, subredes, rutas, gateways
        y reglas de seguridad para controlar el tráfico.
      </p>

      <Codeblock code={vpcCode} title="VPC" />

      <Note title="Idea principal">
        Una VPC funciona como la red base donde viven muchos recursos de AWS.
        Permite separar entornos, proteger servicios y controlar la
        conectividad.
      </Note>

      <h2
        id="subredes"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Subredes
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una subred es una división interna de una VPC. Permite organizar
        recursos en rangos de IP más pequeños y ubicarlos en zonas de
        disponibilidad específicas.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Normalmente se utilizan subredes públicas para recursos que deben tener
        acceso directo a internet y subredes privadas para recursos internos.
      </p>

      <Codeblock code={subnetCode} title="Subnet" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Subred pública
          </h3>

          <p className="text-sm text-[#757575]">
            Puede comunicarse con internet mediante un Internet Gateway.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Subred privada
          </h3>

          <p className="text-sm text-[#757575]">
            Se usa para recursos internos como bases de datos o servicios no
            expuestos públicamente.
          </p>
        </div>
      </div>

      <h2
        id="internet-gateway"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Internet Gateway
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un Internet Gateway permite que una VPC tenga comunicación con internet.
        Para que una instancia pueda ser accesible públicamente, debe estar en
        una subred pública y tener una ruta hacia el Internet Gateway.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Además, la instancia necesita una IP pública o elástica y reglas de
        seguridad que permitan el tráfico necesario.
      </p>

      <Note title="Ejemplo">
        Un servidor web en EC2 puede estar en una subred pública con acceso al
        puerto 80 o 443 desde internet.
      </Note>

      <h2
        id="route-tables"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Route Tables
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las route tables definen hacia dónde se envía el tráfico dentro de una
        VPC. Cada subred debe estar asociada a una tabla de rutas.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una ruta común en una subred pública es enviar el tráfico destinado a
        internet, representado como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          0.0.0.0/0
        </code>
        , hacia un Internet Gateway.
      </p>

      <Codeblock code={routeTableCode} title="Route Table" />

      <h2
        id="nat-gateway"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        NAT Gateway
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un NAT Gateway permite que recursos en una subred privada salgan a
        internet sin ser accesibles directamente desde internet.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Es común usarlo para que servidores privados puedan descargar
        actualizaciones, instalar paquetes o comunicarse con servicios externos
        manteniéndose protegidos.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Salida a internet
          </h3>

          <p className="text-sm text-[#757575]">
            Permite conexiones salientes desde subredes privadas.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Mayor seguridad
          </h3>

          <p className="text-sm text-[#757575]">
            Los recursos privados no reciben conexiones directas desde internet.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        Una VPC permite diseñar la red de una aplicación en AWS. Las subredes
        organizan recursos, las route tables controlan el tráfico, el Internet
        Gateway permite acceso público y el NAT Gateway permite salida segura
        desde subredes privadas.
      </Note>
    </DocsLayout>
  );
};
