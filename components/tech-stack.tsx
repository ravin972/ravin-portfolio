import type { TechGroup } from "@/types";
import { Badge } from "@/components/ui/badge";

/** Data-driven stack grid. */
export function TechStack({ groups }: { groups: TechGroup[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-[26px] sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="mb-[13px] font-mono text-xs uppercase text-violet">
            {g.title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {g.items.map((item) => (
              <li key={item}>
                <Badge variant="tech">{item}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
