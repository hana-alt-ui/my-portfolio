import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="h-screen flex overflow-hidden bg-paper text-ink selection:bg-accent/30">
      {/* Left Rail Sidebar */}
      <aside className="w-20 border-r border-border flex flex-col items-center py-10 justify-between shrink-0 bg-white/50">
        <Link to="/" className="group">
          <div className="font-sans font-black text-2xl writing-vertical tracking-widest transition-colors group-hover:text-accent">
            PORTFOLIO
          </div>
        </Link>
        
        <nav className="flex flex-col gap-12 items-center">
          <NavLink to="/" active={location.pathname === "/"}>Works</NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
        </nav>

        <div className="writing-vertical text-[10px] uppercase tracking-[0.3em] text-muted font-medium">
          © 2026
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function NavLink({ to, children, active }: { to: string; children: ReactNode; active?: boolean }) {
  return (
    <Link 
      to={to} 
      className={cn(
        "text-[10px] uppercase tracking-[0.3em] font-bold transition-all writing-vertical py-2",
        active ? "text-ink" : "text-muted hover:text-accent"
      )}
    >
      {children}
    </Link>
  );
}
