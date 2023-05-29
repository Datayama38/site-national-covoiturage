import type { FluxDataInterface } from "@/interfaces/observatoire/dataInterfaces";
import { useState, useEffect } from 'react';
export const useFlux = (code: string, type: string, observe: string, year: number, month: number) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/monthly_flux?code=${code}&type=${type}&observe=${observe}&year=${year}&month=${month}`)
      const res = await response.json();
      if(response.ok){
        setData(res.result.data);
        setError(null);
      } else {
        setError(res.error.data);
        setData([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [code,type,observe,year,month]);
  return { data, error, loading }
}