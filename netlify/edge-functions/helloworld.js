export default async (request, context) => {
  return new Response("Hello World from the Edge!", {
    headers: { "content-type": "text/plain" },
  });
};
 
