export const API_ENDPOINT = 'http://52.196.231.30';

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202
};

export const GRANT_TYPE = 'grant_type=password';
export const GET_TOKEN_USERNAME = 'apitoken@gmail.com';
export const GET_TOKEN_PASSWORD = 'apitoken@123';
export const SECRET_KEY = 'client_id=1&client_secret=PD06wUHWOnVwsYOSlALRkfk5t8AxAIPZVOSPDpoQ';

const GENERAL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkzOGYzMzA5NjEyOWI3ZGEyMjhkYTAxNWE4MDU0YTVjMjViMTE1ZjE5ZjU0YWYxMjBjZGIzYzdhZTI2OTU3YTY4ZmExZTAzMjRhNzU3NmZiIn0.eyJhdWQiOiIyIiwianRpIjoiOTM4ZjMzMDk2MTI5YjdkYTIyOGRhMDE1YTgwNTRhNWMyNWIxMTVmMTlmNTRhZjEyMGNkYjNjN2FlMjY5NTdhNjhmYTFlMDMyNGE3NTc2ZmIiLCJpYXQiOjE1NjY5NzQyMDEsIm5iZiI6MTU2Njk3NDIwMSwiZXhwIjoxNTk4NTk2NjAxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pYFJx4gbJXew13iQ4tRDwz6y7wgvMilP4K6sxP1_vSVLjGwRVpCcFi8uuJ_Yai3dSVhUL16CEWUTY48QMRCyCsj-rqQIFI1yEV3pzDH6OGhqABxZh6LbVSZeE4Dj6bKP-hn8FmE7AxJ5kDLdRa8DFCZplhF9UKHgGBr0KWKOKCW2IJSA9e2DSixNLkjkE8laLwKNsbfArSSrEkNbLcfQy0Y9EtJb4Wvd-X-b9olobqh5tgoT4zuYvWjbU6c8hl_3clmpE0NQri8mzxMfR2K5wXMjZ4F_td5xqBHtW7kNabZLhoRT0QdnfDVXegp7vnA4e-kawy-hHDQMPAQi5R-4gNWKGvYExhiou1sAgC6nTNqYTCwTvapew7NwRl29cTShEFcK9pB7W5YZrvB-p4DQDxOqx0Mk1GVpT85-a2H2EGeY1i9w9VLXBX1-15frMQDU7CuejHWF_J3sp_ZkHvylrHxVwotsfQyTLVtHTX2rfzXNB-T3jFWXdyzu1SYRdvrjHb_dEphPG0tMPTCDdguhNBhiHvJKxamSBEDCv1EdcP93iZYp4h0Yv9EFeb2kq9n7IvWKyIn8jWn2b3SHrF5DM06i-XoHpYR7v0FFuK1SXhnI9zJTqLKg6bQ6qevFwrxWbzPiMZU67Tm2yHpzkAFArmPV-utVhNa5ziPTpBqM7Vg';
export const CONFIG_GET_GENERAL_DATA = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${GENERAL_TOKEN}`
  }
};
