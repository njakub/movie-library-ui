import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppShell from "./components/AppShell/AppShell";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MyProfile from "./components/MyProfile/MyProfile";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Loading from "./components/common/Loading/Loading";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

const queryClient = new QueryClient();

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-slate-900">
        <AppShell>
          <Routes>
            <Route exact path="/myProfile" element={<MyProfile />} />
            <Route exact path="/movieSearch" element={<MovieSearch />} />
            <Route exact path="/movieDetails" element={<MovieDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AppShell>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
