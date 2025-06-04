export default async (request, context) => {
  return new Response("Hello World from the Edge!", {
    headers: { "content-type": "text/plain" },
  });
};
 
export const config = {
  path: "/simple", // Routes this function to /hello
};