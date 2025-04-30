
/**
 * GitHub API service
 * This service handles all interactions with the GitHub API
 */

// GitHub API base URL
const GITHUB_API_BASE_URL = 'https://api.github.com';

// GitHub OAuth endpoints
const GITHUB_OAUTH_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_OAUTH_TOKEN_URL = 'https://github.com/login/oauth/access_token';

// The client ID should be replaced with your actual GitHub OAuth App client ID
const GITHUB_CLIENT_ID = 'YOUR_GITHUB_CLIENT_ID';

// Scopes needed for the app
const GITHUB_SCOPES = ['repo', 'user'];

/**
 * Helper function to store GitHub token
 */
export const storeGitHubToken = (token: string): void => {
  localStorage.setItem('github_token', token);
};

/**
 * Helper function to get stored GitHub token
 */
export const getGitHubToken = (): string | null => {
  return localStorage.getItem('github_token');
};

/**
 * Helper function to clear GitHub token
 */
export const clearGitHubToken = (): void => {
  localStorage.removeItem('github_token');
};

/**
 * Check if user is authenticated with GitHub
 */
export const isGitHubAuthenticated = (): boolean => {
  return !!getGitHubToken();
};

/**
 * Get the GitHub OAuth URL for authorization
 */
export const getGitHubAuthUrl = (): string => {
  const redirectUri = `${window.location.origin}/github/callback`;
  
  const queryParams = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: GITHUB_SCOPES.join(' '),
    state: generateRandomState(),
  });
  
  return `${GITHUB_OAUTH_AUTHORIZE_URL}?${queryParams.toString()}`;
};

/**
 * Generate a random state for OAuth security
 */
const generateRandomState = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

/**
 * Exchange code for token (This should be done server-side in production!)
 * Note: For a production app, this would require a backend service to securely exchange the code
 */
export const exchangeCodeForToken = async (code: string): Promise<string> => {
  // NOTE: This is for demonstration purposes.
  // In a real app, this exchange should happen on the server-side to protect your client secret
  console.log('Code received:', code);
  
  // For now, we'll just simulate the token exchange
  // In a real implementation, you would need a backend service to make this request
  return Promise.resolve('simulated_github_token');
};

/**
 * Fetch authenticated user information
 */
export const fetchGitHubUser = async (): Promise<any> => {
  const token = getGitHubToken();
  
  if (!token) {
    throw new Error('No GitHub token found');
  }
  
  const response = await fetch(`${GITHUB_API_BASE_URL}/user`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  return await response.json();
};

/**
 * Fetch user repositories
 */
export const fetchUserRepositories = async (): Promise<any[]> => {
  const token = getGitHubToken();
  
  if (!token) {
    throw new Error('No GitHub token found');
  }
  
  const response = await fetch(`${GITHUB_API_BASE_URL}/user/repos?sort=updated`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  return await response.json();
};

/**
 * Create a repository
 */
export const createRepository = async (name: string, description: string, isPrivate: boolean): Promise<any> => {
  const token = getGitHubToken();
  
  if (!token) {
    throw new Error('No GitHub token found');
  }
  
  const response = await fetch(`${GITHUB_API_BASE_URL}/user/repos`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      private: isPrivate,
      auto_init: true,
    }),
  });
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  return await response.json();
};

