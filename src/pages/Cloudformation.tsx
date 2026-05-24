import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const templateCode = `AWSTemplateFormatVersion: "2010-09-09"
Description: Ejemplo simple de CloudFormation

Resources:
  MiBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: mi-bucket-cloudformation`;

const stackCode = `{
  "StackName": "mi-stack",
  "Status": "CREATE_COMPLETE",
  "Resources": [
    "AWS::S3::Bucket",
    "AWS::IAM::Role"
  ]
}`;

const parametrosCode = `Parameters:
  NombreBucket:
    Type: String
    Description: Nombre del bucket S3

Resources:
  MiBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Ref NombreBucket`;

const outputsCode = `Outputs:
  BucketName:
    Description: Nombre del bucket creado
    Value: !Ref MiBucket`;

export const Cloudformation = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[3].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        CloudFormation
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        AWS CloudFormation permite definir infraestructura como código para
        crear y administrar recursos de AWS de forma declarativa y repetible.
      </p>

      <h2
        id="infraestructura-como-codigo"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Infraestructura como código
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La infraestructura como código consiste en describir recursos de cloud
        mediante archivos de configuración, en lugar de crearlos manualmente
        desde la consola.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Con CloudFormation puedes definir servicios como buckets S3, instancias
        EC2, roles IAM, VPCs, bases de datos RDS y muchos otros recursos.
      </p>

      <Codeblock code={templateCode} title="template.yml" />

      <Note title="Idea principal">
        CloudFormation permite versionar, repetir y automatizar la creación de
        infraestructura en AWS.
      </Note>

      <h2
        id="templates"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Templates
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un template es un archivo YAML o JSON donde se describe qué recursos se
        quieren crear y cómo deben configurarse.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los templates contienen secciones como parámetros, recursos, condiciones
        y salidas.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Resources</h3>
          <p className="text-sm text-[#757575]">
            Define los recursos que CloudFormation debe crear.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Parameters</h3>
          <p className="text-sm text-[#757575]">
            Permite recibir valores externos para reutilizar templates.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Outputs</h3>
          <p className="text-sm text-[#757575]">
            Devuelve información útil después de crear el stack.
          </p>
        </div>
      </div>

      <h2
        id="stacks"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Stacks
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un stack es el conjunto de recursos creados a partir de un template.
        CloudFormation administra esos recursos como una unidad.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Si actualizas el template, CloudFormation puede modificar el stack para
        reflejar los cambios definidos.
      </p>

      <Codeblock code={stackCode} title="Stack CloudFormation" />

      <Note title="Ejemplo">
        Un stack puede contener una VPC, subredes, una instancia EC2 y un
        Security Group creados juntos desde un mismo template.
      </Note>

      <h2
        id="parametros"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Parámetros
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los parámetros permiten pasar valores al template al momento de crear o
        actualizar un stack.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto ayuda a reutilizar el mismo template en distintos entornos, por
        ejemplo desarrollo, testing o producción.
      </p>

      <Codeblock code={parametrosCode} title="parameters.yml" />

      <h2
        id="outputs"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Outputs
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los outputs permiten mostrar información importante después de crear el
        stack, como nombres de recursos, endpoints, IDs o URLs.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        También pueden servir para compartir valores entre stacks o facilitar la
        configuración de otros servicios.
      </p>

      <Codeblock code={outputsCode} title="outputs.yml" />

      <Note title="Buenas prácticas">
        Usa templates versionados en Git, separa entornos con parámetros, revisa
        los cambios antes de aplicarlos y evita crear recursos manualmente si
        forman parte de la infraestructura del proyecto.
      </Note>

      <Note title="Resumen">
        CloudFormation permite crear infraestructura como código usando
        templates, stacks, parámetros y outputs. Es útil para automatizar,
        versionar y repetir configuraciones de AWS de forma controlada.
      </Note>
    </DocsLayout>
  );
};
