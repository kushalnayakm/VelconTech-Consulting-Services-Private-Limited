const configuredBase = import.meta.env.VITE_API_BASE_URL;

export function getApiBase() {
  if (configuredBase && configuredBase.trim()) {
    return configuredBase.replace(/\/$/, '');
  }
  return '';
}

export async function postJson(path, body) {
  const response = await fetch(`${getApiBase()}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

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

export async function postFormData(path, formData) {
  const response = await fetch(`${getApiBase()}${path}`, {
    method: 'POST',
    body: formData,
  });

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
