const configuredBase = import.meta.env.VITE_API_BASE_URL;

function getApiBase() {
  if (configuredBase && configuredBase.trim()) {
    return configuredBase.replace(/\/$/, '');
  }
  return '';
}

async function parseJsonResponse(response) {
  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed. Please try again.');
  }

  return data;
}

export async function postJson(path, body) {
  const response = await fetch(`${getApiBase()}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return parseJsonResponse(response);
}

export async function postFormData(path, formData) {
  const response = await fetch(`${getApiBase()}${path}`, {
    method: 'POST',
    body: formData,
  });
  return parseJsonResponse(response);
}
