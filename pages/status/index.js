import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";
  let databaseInfo = null;

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
    databaseInfo = JSON.stringify(data.dependencies.database);
  }

  return (
    <>
      <div>
        <strong>Ultima atualização: </strong> {updatedAtText}
      </div>
      <div>
        <strong>Database Info: </strong>
        {databaseInfo}
      </div>
    </>
  );
}
