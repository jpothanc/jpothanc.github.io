import { SummaryCard } from "react-jp-ui";
import NavBar from "../components/NavBar";

const ProjectSummary = () => {
  return (
    <>
      <NavBar pageInfo="<projects/>" />
      <div className="summary_container">
        <div className="summary_cards">
          <SummaryCard
            title="datastore"
            link="https://data-store.azurewebsites.net/api/v1/data/query?catalogue=Trading&catalogueItem=Users"
            body="A robust read-through caching service streamlining data retrieval. Enhance efficiency and speed by storing frequently accessed data, optimizing performance seamlessly"
            info="https://api.github.com/repos/jpothanc/datastore/readme"
            repo=""
            tech="https://skillicons.dev/icons?i=java,spring,azure&perline=10"
            height={500}
          />
          <SummaryCard
            title="hero"
            link="https://hero-two-gilt.vercel.app/"
            body="Monitoring UI for production experts. Delivers real-time insights on microservices, databases, processes. Seamlessly integrates with Java-based health checks via WebSockets for instant updates."
            info="https://api.github.com/repos/jpothanc/hero/readme"
            repo=""
            tech="https://skillicons.dev/icons?i=react,vscode,vercel&perline=10"
          />
          <SummaryCard
            title="dynamo"
            link="https://dynamo-blue.vercel.app/"
            body="Dynamo is a web application that allows you to configure JSON endpoints and visualize the data in a grid format for easy reading and support."
            info="https://api.github.com/repos/jpothanc/dynamo/readme"
            repo="https://github.com/jpothanc/dynamo"
            tech="https://skillicons.dev/icons?i=react,vscode,vercel&perline=10"
          />
          <SummaryCard
            title="healthcheck"
            link="https://healthcheck-ib.azurewebsites.net/api/v1/health/check"
            body="Service which monitors microservices, databases with regular pings, ensuring ongoing health assessment. Offers real-time updates via WebSockets to subscribed clients. Also provides REST APIs for detailed health check info"
            info="https://api.github.com/repos/jpothanc/healthcheck/readme"
            repo=""
            tech="https://skillicons.dev/icons?i=java,spring,azure&perline=10"
          />
          <SummaryCard
            title="webq"
            link="https://www.nuget.org/packages/WebQ/"
            body="A lightweight class library facilitating HTTP queries while caching data locally for resilience. Configure cache duration, ensuring application reliability during REST endpoint downtime. Boost confidence in seamless operations."
            info="https://api.github.com/repos/jpothanc/webq/readme"
            repo=""
            tech="https://skillicons.dev/icons?i=dotnet,visualstudio&perline=10"
          />
          <SummaryCard
            title="authme"
            link=""
            body="This .NET Standard class library offers HTTP Basic Authentication capabilities. Features seamless integration into .NET applications, credential validation, and compatibility across various .NET projects."
            info="https://api.github.com/repos/jpothanc/authme/readme"
            repo="https://github.com/jpothanc/dynamo"
            tech="https://skillicons.dev/icons?i=dotnet,visualstudio&perline=10"
          />
          <SummaryCard
            title="simpleskin"
            link="https://www.nuget.org/packages/SimpleSkin"
            body="A lightweight class library enabling swift integration of custom skins into Windows Forms apps. Easily revamp your app's appearance without extensive control modification, offering a fresh, unique look effortlessly."
            info="https://api.github.com/repos/jpothanc/simpleskin/readme"
            repo="https://github.com/jpothanc/simpleskin"
            tech="https://skillicons.dev/icons?i=dotnet,visualstudio&perline=10"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSummary;
