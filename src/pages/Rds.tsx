import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const rdsCode = `{
  "DBInstanceIdentifier": "mi-base-datos",
  "Engine": "postgres",
  "DBInstanceClass": "db.t3.micro",
  "Status": "available"
}`;

const conexionCode = `spring.datasource.url=jdbc:postgresql://mi-db.xyz.us-east-1.rds.amazonaws.com:5432/app
spring.datasource.username=admin
spring.datasource.password=123456`;

const backupCode = `{
  "BackupRetentionPeriod": 7,
  "MultiAZ": true,
  "StorageEncrypted": true
}`;

export const Rds = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        RDS
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Amazon RDS es un servicio administrado de bases de datos que permite
        crear, operar y escalar bases de datos relacionales sin administrar
        manualmente servidores.
      </p>

      <h2
        id="que-es-rds"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es RDS?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        RDS significa Relational Database Service. AWS se encarga de tareas como
        instalación, mantenimiento, backups, actualizaciones y monitoreo de la
        base de datos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto permite enfocarse más en el desarrollo de aplicaciones y menos en
        la administración de infraestructura.
      </p>

      <Codeblock code={rdsCode} title="Instancia RDS" />

      <Note title="Idea principal">
        RDS simplifica la administración de bases de datos relacionales en la
        nube mediante servicios administrados y escalables.
      </Note>

      <h2
        id="motores-db"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Motores de base de datos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS RDS soporta distintos motores de bases de datos relacionales según
        las necesidades de la aplicación.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">PostgreSQL</h3>

          <p className="text-sm text-[#757575]">
            Muy utilizado en aplicaciones modernas y proyectos backend.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">MySQL</h3>

          <p className="text-sm text-[#757575]">
            Popular en aplicaciones web y sistemas tradicionales.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">MariaDB</h3>

          <p className="text-sm text-[#757575]">
            Alternativa compatible con MySQL y orientada a open source.
          </p>
        </div>
      </div>

      <h2
        id="instancias-rds"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Instancias RDS
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una instancia RDS representa la base de datos ejecutándose dentro de
        AWS. Puede configurarse con distintos tamaños de CPU, memoria,
        almacenamiento y rendimiento.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        También es posible configurar acceso público o privado dependiendo de la
        arquitectura de red utilizada.
      </p>

      <Note title="Recomendación">
        En producción, normalmente las bases de datos se colocan dentro de
        subredes privadas para mejorar la seguridad.
      </Note>

      <h2
        id="backups"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Backups
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS RDS puede generar backups automáticos para recuperar información en
        caso de errores o pérdida de datos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        También permite crear snapshots manuales antes de realizar cambios
        importantes.
      </p>

      <Codeblock code={backupCode} title="Configuración de backups" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Backups automáticos
          </h3>

          <p className="text-sm text-[#757575]">
            AWS crea copias automáticamente según el período configurado.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Snapshots</h3>

          <p className="text-sm text-[#757575]">
            Copias manuales que pueden conservarse por tiempo indefinido.
          </p>
        </div>
      </div>

      <h2
        id="alta-disponibilidad"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Alta disponibilidad
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        RDS permite habilitar configuraciones Multi-AZ para mejorar la
        disponibilidad y tolerancia a fallos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En una configuración Multi-AZ, AWS mantiene una copia sincronizada de la
        base de datos en otra zona de disponibilidad.
      </p>

      <Note title="Ventaja">
        Si ocurre una falla en la instancia principal, AWS puede cambiar
        automáticamente a la instancia secundaria.
      </Note>

      <h2
        id="conexion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Conexión desde aplicaciones
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las aplicaciones pueden conectarse a RDS utilizando el endpoint
        proporcionado por AWS junto con el usuario, contraseña y puerto de la
        base de datos.
      </p>

      <Codeblock code={conexionCode} title="application.properties" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Frameworks como Spring Boot utilizan esta configuración para conectarse
        automáticamente a la base de datos.
      </p>

      <Note title="Resumen">
        RDS permite ejecutar bases de datos relacionales administradas en AWS.
        Incluye soporte para múltiples motores, backups automáticos, alta
        disponibilidad y escalabilidad sin administrar servidores manualmente.
      </Note>
    </DocsLayout>
  );
};
