export async function getFlux(code: string, type: string, observe: string, year: number, month: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/monthly_flux?code=${code}&type=${type}&observe=${observe}&year=${year}&month=${month}`);
  const data = await res.json()
  return data.result.data;
}