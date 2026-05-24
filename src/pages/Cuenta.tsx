import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";

export const Cuenta = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[0].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Cuenta y configuración
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Antes de usar AWS es importante crear una cuenta, conocer el nivel
        gratuito, proteger el acceso principal y configurar alertas para evitar
        gastos inesperados.
      </p>

      <h2
        id="crear-cuenta"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear una cuenta AWS
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para comenzar a usar AWS necesitas una cuenta. Durante el registro se
        solicita un correo electrónico, datos personales o de empresa, un método
        de pago y una verificación de identidad.
      </p>

      <Note title="Importante">
        Aunque algunos servicios tienen uso gratuito, AWS solicita un método de
        pago para activar la cuenta.
      </Note>

      <h2
        id="free-tier"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Free Tier
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El Free Tier es el nivel gratuito de AWS. Permite probar ciertos
        servicios sin costo dentro de límites específicos de uso.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        No todos los servicios son gratuitos y algunos límites aplican solo por
        tiempo determinado. Por eso es importante revisar el consumo desde la
        consola.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">EC2</h3>
          <p className="text-sm text-[#757575]">
            Permite probar instancias virtuales dentro de ciertos límites.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">S3</h3>
          <p className="text-sm text-[#757575]">
            Permite almacenar objetos con una cantidad limitada de espacio
            gratuito.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Lambda</h3>
          <p className="text-sm text-[#757575]">
            Permite ejecutar funciones serverless con una cantidad gratuita de
            invocaciones.
          </p>
        </div>
      </div>

      <h2
        id="consola-aws"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Consola de administración
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La consola de AWS es la interfaz web desde donde puedes crear,
        configurar y administrar servicios como EC2, S3, RDS, Lambda, IAM y
        muchos otros.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Desde la consola también puedes revisar facturación, permisos, regiones,
        métricas y configuraciones generales de la cuenta.
      </p>

      <Note title="Recomendación">
        Antes de crear recursos, verifica en qué región estás trabajando. Los
        servicios y costos pueden variar según la región seleccionada.
      </Note>

      <h2
        id="configurar-mfa"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Configurar MFA
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        MFA significa autenticación multifactor. Es una capa adicional de
        seguridad que solicita un segundo método de verificación además de la
        contraseña.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Es recomendable activar MFA especialmente en el usuario root, ya que ese
        usuario tiene control total sobre la cuenta.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Usuario root
          </h3>

          <p className="text-sm text-[#757575]">
            Debe usarse solo para tareas administrativas importantes.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Usuarios IAM
          </h3>

          <p className="text-sm text-[#757575]">
            Son usuarios creados para trabajar con permisos específicos.
          </p>
        </div>
      </div>

      <h2
        id="presupuestos-alertas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Presupuestos y alertas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS permite crear presupuestos y alertas para controlar el gasto de la
        cuenta. Esto ayuda a recibir avisos cuando el consumo se acerca a un
        límite definido.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una buena práctica inicial es crear una alerta de bajo monto, por
        ejemplo 1 o 5 dólares, para detectar rápidamente cualquier consumo
        inesperado.
      </p>

      <Note title="Resumen">
        Al crear una cuenta AWS, lo más importante es proteger el usuario root
        con MFA, conocer los límites del Free Tier, revisar la región activa y
        configurar alertas de facturación desde el comienzo.
      </Note>
    </DocsLayout>
  );
};
