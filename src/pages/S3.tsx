import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const bucketCode = `{
  "BucketName": "mi-app-bucket",
  "Region": "us-east-1",
  "Versioning": true
}`;

const objetoCode = `{
  "Key": "imagenes/logo.png",
  "Size": "120 KB",
  "StorageClass": "STANDARD"
}`;

const politicaBucketCode = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mi-bucket/*"
    }
  ]
}`;

export const S3 = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        S3
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Amazon S3 es un servicio de almacenamiento de objetos utilizado para
        guardar archivos, imágenes, videos, backups, aplicaciones estáticas y
        muchos otros tipos de contenido.
      </p>

      <h2
        id="que-es-s3"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es S3?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        S3 significa Simple Storage Service. Es un sistema de almacenamiento
        escalable diseñado para guardar y recuperar objetos desde cualquier
        lugar mediante internet.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los archivos almacenados en S3 se organizan dentro de contenedores
        llamados buckets.
      </p>

      <Codeblock code={bucketCode} title="Bucket S3" />

      <Note title="Idea principal">
        S3 está diseñado para almacenar grandes cantidades de información con
        alta disponibilidad y durabilidad.
      </Note>

      <h2
        id="buckets"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Buckets
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un bucket es el contenedor principal donde se almacenan los objetos en
        S3.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cada bucket tiene un nombre único global y pertenece a una región
        específica de AWS.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Escalable</h3>

          <p className="text-sm text-[#757575]">
            Puede almacenar desde pocos archivos hasta millones de objetos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Alta disponibilidad
          </h3>

          <p className="text-sm text-[#757575]">
            Los datos se replican automáticamente dentro de la región.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Acceso web</h3>

          <p className="text-sm text-[#757575]">
            Los objetos pueden accederse mediante URLs o APIs.
          </p>
        </div>
      </div>

      <h2
        id="objetos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Objetos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un objeto representa un archivo almacenado dentro de un bucket. Cada
        objeto tiene una clave única llamada key.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las keys funcionan de manera similar a rutas o carpetas, aunque S3 no
        utiliza un sistema de directorios tradicional.
      </p>

      <Codeblock code={objetoCode} title="Objeto S3" />

      <Note title="Ejemplo">
        Una key como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          imagenes/logo.png
        </code>{" "}
        crea visualmente una estructura de carpetas dentro del bucket.
      </Note>

      <h2
        id="permisos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Permisos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los buckets y objetos pueden configurarse como privados o públicos según
        las necesidades de acceso.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        AWS recomienda mantener los buckets privados y utilizar políticas IAM o
        bucket policies para controlar permisos.
      </p>

      <Codeblock code={politicaBucketCode} title="Bucket Policy" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esta política permite acceso público de lectura a los objetos del
        bucket.
      </p>

      <Note title="Advertencia">
        Un bucket público mal configurado puede exponer archivos sensibles en
        internet.
      </Note>

      <h2
        id="versionado"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Versionado
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El versionado permite conservar múltiples versiones de un mismo objeto.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto ayuda a recuperar archivos eliminados accidentalmente o restaurar
        versiones anteriores de un recurso.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Recuperación
          </h3>

          <p className="text-sm text-[#757575]">
            Permite restaurar versiones anteriores de archivos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Protección</h3>

          <p className="text-sm text-[#757575]">
            Reduce el riesgo de pérdida accidental de información.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        S3 es un servicio de almacenamiento de objetos altamente escalable y
        durable. Los buckets organizan archivos, los permisos controlan el
        acceso y el versionado ayuda a proteger la información almacenada.
      </Note>
    </DocsLayout>
  );
};
