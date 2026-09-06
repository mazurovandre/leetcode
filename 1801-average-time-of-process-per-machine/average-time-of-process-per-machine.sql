select machine_id, ROUND(SUM(timestamp_to - timestamp_from) / COUNT(*), 3) as processing_time from 
(select machine_id, process_id, timestamp as timestamp_from from Activity
where activity_type = 'start') as query_from
join
(select machine_id, process_id, timestamp as timestamp_to from Activity
where activity_type = 'end') as query_to
using(machine_id, process_id)
group by machine_id