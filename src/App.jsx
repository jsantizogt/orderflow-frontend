import React, { useState } from 'react';
import { ShoppingCart, Package, Users, TrendingUp, LogOut, Plus, Edit, Trash2, Search, MessageSquare } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const Sidebar = () => (
    <div className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen fixed left-0 top-0 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          OrderFlow
        </h1>
        <p className="text-slate-400 text-sm mt-1">Sistema de Pedidos</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <NavItem icon={TrendingUp} label="Dashboard" onClick={() => setCurrentView('dashboard')} active={currentView === 'dashboard'} />
        <NavItem icon={ShoppingCart} label="Pedidos" onClick={() => setCurrentView('orders')} active={currentView === 'orders'} />
        <NavItem icon={Package} label="Productos" onClick={() => setCurrentView('products')} active={currentView === 'products'} />
        <NavItem icon={Users} label="Clientes" onClick={() => setCurrentView('clients')} active={currentView === 'clients'} />
        <NavItem icon={MessageSquare} label="IA Assistant" onClick={() => setCurrentView('ai')} active={currentView === 'ai'} />
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
          <LogOut size={16} />
          <span className="text-sm">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );

  const NavItem = ({ icon: Icon, label, onClick, active }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        active 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
          : 'hover:bg-slate-700'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2" style={{ color }}>{value}</p>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
          <Icon size={24} style={{ color }} />
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Dashboard</h2>
          <p className="text-slate-600 mt-1">Bienvenido a OrderFlow</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
          <Plus size={20} />
          <span>Nuevo Pedido</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Pedidos Hoy" value="24" icon={ShoppingCart} color="#3b82f6" />
        <StatCard title="En Producción" value="8" icon={Package} color="#f59e0b" />
        <StatCard title="Ventas del Mes" value="$45,890" icon={TrendingUp} color="#10b981" />
        <StatCard title="Clientes Activos" value="156" icon={Users} color="#8b5cf6" />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Sistema Funcionando Correctamente ✅</h3>
        <p className="text-slate-600">Todas las conexiones están activas. Listo para comenzar a operar.</p>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex-1 ml-64 p-8">
        {currentView === 'dashboard' && <DashboardView />}
        {currentView !== 'dashboard' && (
          <div className="text-center py-20">
            <Package size={64} className="mx-auto text-slate-400 mb-4" />
            <h3 className="text-2xl font-bold text-slate-700">Vista en Desarrollo</h3>
            <p className="text-slate-500 mt-2">Esta sección estará disponible próximamente</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
