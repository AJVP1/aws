import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const metricasCode = `{
  "Namespace": "AWS/EC2",
  "MetricName": "CPUUtilization",
  "Dimensions": [
    {
      "Name": "InstanceId",
      "Value": "i-0123456789abcdef0"
    }
  ]
}`;

const logsCode = `{
  "LogGroupName": "/aws/lambda/procesarImagen",
  "LogStreamName": "2026/05/24/[$LATEST]abc123",
  "Message": "Función ejecutada correctamente"
}`;

const alarmaCode = `{
  "AlarmName": "cpu-alta-ec2",
  "MetricName": "CPUUtilization",
  "Threshold": 80,
  "ComparisonOperator": "GreaterThanThreshold"
}`;

export const Cloudwatch = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[3].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        CloudWatch
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Amazon CloudWatch permite monitorear recursos y aplicaciones en AWS
        mediante métricas, logs, alarmas y dashboards.
      </p>

      <h2
        id="que-es-cloudwatch"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es CloudWatch?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        CloudWatch es el servicio de monitoreo de AWS. Ayuda a observar el
        comportamiento de servicios como EC2, Lambda, RDS, API Gateway y muchos
        otros.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Con CloudWatch puedes detectar errores, revisar consumo de recursos,
        configurar alertas y analizar información generada por las aplicaciones.
      </p>

      <Note title="Idea principal">
        CloudWatch permite saber qué está pasando dentro de tus recursos AWS y
        reaccionar ante problemas de rendimiento, errores o consumo inesperado.
      </Note>

      <h2
        id="metricas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Métricas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las métricas son valores numéricos que representan el estado o
        rendimiento de un recurso. Por ejemplo, uso de CPU, memoria, cantidad de
        errores, latencia o número de invocaciones.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Muchos servicios de AWS envían métricas automáticamente a CloudWatch.
      </p>

      <Codeblock code={metricasCode} title="Métrica CloudWatch" />

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">CPU</h3>
          <p className="text-sm text-[#757575]">
            Permite detectar sobrecarga en instancias EC2.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Errores</h3>
          <p className="text-sm text-[#757575]">
            Ayuda a identificar fallos en APIs, Lambda u otros servicios.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Latencia</h3>
          <p className="text-sm text-[#757575]">
            Mide cuánto tarda una aplicación o servicio en responder.
          </p>
        </div>
      </div>

      <h2
        id="logs"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Logs
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los logs son registros de eventos generados por aplicaciones o
        servicios. Permiten revisar mensajes, errores, respuestas y detalles de
        ejecución.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Servicios como Lambda envían automáticamente sus salidas de{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          console.log
        </code>{" "}
        a CloudWatch Logs.
      </p>

      <Codeblock code={logsCode} title="CloudWatch Logs" />

      <Note title="Ejemplo">
        Si una función Lambda falla, puedes revisar CloudWatch Logs para ver el
        error exacto y entender qué ocurrió durante la ejecución.
      </Note>

      <h2
        id="alarmas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Alarmas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las alarmas permiten reaccionar cuando una métrica supera o baja de un
        límite definido.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Por ejemplo, puedes crear una alarma para recibir una notificación si el
        uso de CPU de una instancia EC2 supera el 80%.
      </p>

      <Codeblock code={alarmaCode} title="Alarma CloudWatch" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Notificaciones
          </h3>

          <p className="text-sm text-[#757575]">
            Pueden enviar alertas mediante servicios como SNS.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Acciones automáticas
          </h3>

          <p className="text-sm text-[#757575]">
            Pueden activar respuestas automáticas ante ciertos eventos.
          </p>
        </div>
      </div>

      <h2
        id="dashboards"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Dashboards
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los dashboards permiten visualizar métricas y gráficos en una misma
        pantalla. Son útiles para monitorear aplicaciones, infraestructura y
        servicios críticos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Puedes crear dashboards personalizados para observar recursos como EC2,
        RDS, Lambda, API Gateway o métricas propias de la aplicación.
      </p>

      <Note title="Buenas prácticas">
        Revisa logs con frecuencia, crea alarmas para métricas importantes,
        configura retención de logs y usa dashboards para tener una vista rápida
        del estado de tus recursos.
      </Note>

      <Note title="Resumen">
        CloudWatch centraliza el monitoreo en AWS. Permite trabajar con
        métricas, logs, alarmas y dashboards para detectar problemas, analizar
        rendimiento y mejorar la operación de aplicaciones en la nube.
      </Note>
    </DocsLayout>
  );
};
