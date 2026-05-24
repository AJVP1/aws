import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const usuarioIamCode = `{
  "User": {
    "UserName": "armando",
    "Arn": "arn:aws:iam::123456789:user/armando"
  }
}`;

const politicaCode = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "*"
    }
  ]
}`;

const rolCode = `{
  "RoleName": "EC2S3AccessRole",
  "Permissions": [
    "AmazonS3ReadOnlyAccess"
  ]
}`;

export const Iam = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        IAM
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        IAM (Identity and Access Management) es el servicio de AWS encargado de
        administrar usuarios, permisos y accesos dentro de una cuenta.
      </p>

      <h2
        id="que-es-iam"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es IAM?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        IAM permite controlar quién puede acceder a los recursos de AWS y qué
        acciones puede realizar.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Con IAM es posible crear usuarios, grupos, roles y políticas para
        administrar permisos de manera segura y organizada.
      </p>

      <Codeblock code={usuarioIamCode} title="Usuario IAM" />

      <Note title="Idea principal">
        IAM es la base de la seguridad en AWS. Todo acceso a servicios y
        recursos debería administrarse mediante permisos específicos.
      </Note>

      <h2
        id="usuarios-grupos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Usuarios y grupos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un usuario IAM representa una identidad dentro de AWS. Cada usuario
        puede tener credenciales y permisos propios.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los grupos permiten organizar usuarios y asignar permisos de forma más
        sencilla. En lugar de configurar permisos individualmente, los usuarios
        heredan permisos del grupo al que pertenecen.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Usuarios</h3>

          <p className="text-sm text-[#757575]">
            Representan personas o aplicaciones con acceso a AWS.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Grupos</h3>

          <p className="text-sm text-[#757575]">
            Facilitan la administración de permisos compartidos.
          </p>
        </div>
      </div>

      <h2
        id="roles"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Roles
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un rol IAM es una identidad temporal que puede ser asumida por usuarios,
        servicios o aplicaciones para obtener permisos específicos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los roles son ampliamente utilizados para permitir que servicios AWS
        interactúen entre sí sin necesidad de almacenar credenciales
        manualmente.
      </p>

      <Codeblock code={rolCode} title="Rol IAM" />

      <Note title="Ejemplo">
        Una instancia EC2 puede asumir un rol IAM para acceder a un bucket S3
        sin guardar claves de acceso dentro del servidor.
      </Note>

      <h2
        id="politicas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Políticas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las políticas IAM son documentos JSON que definen permisos mediante
        acciones permitidas o denegadas sobre recursos específicos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una política puede permitir acciones como leer un bucket S3, crear
        instancias EC2 o consultar bases de datos.
      </p>

      <Codeblock code={politicaCode} title="Policy.json" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, la política permite listar buckets de S3 mediante la
        acción{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          s3:ListBucket
        </code>
        .
      </p>

      <h2
        id="buenas-practicas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Buenas prácticas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La seguridad en AWS depende en gran parte de una correcta administración
        de permisos. Es importante aplicar el principio de menor privilegio.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Usar MFA</h3>

          <p className="text-sm text-[#757575]">
            Protege usuarios importantes con autenticación multifactor.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Menor privilegio
          </h3>

          <p className="text-sm text-[#757575]">
            Otorga únicamente los permisos necesarios para cada tarea.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Evitar root</h3>

          <p className="text-sm text-[#757575]">
            El usuario root no debería utilizarse para tareas diarias.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Usar roles</h3>

          <p className="text-sm text-[#757575]">
            Los roles son más seguros que almacenar claves manualmente.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        IAM permite administrar identidades y permisos dentro de AWS mediante
        usuarios, grupos, roles y políticas. Una buena configuración de IAM es
        fundamental para mantener la seguridad de la infraestructura cloud.
      </Note>
    </DocsLayout>
  );
};
